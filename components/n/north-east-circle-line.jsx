import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8jlo7bno.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8jlo7bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:north-east-circle-line"} {...others} />);
}

export default Component;
