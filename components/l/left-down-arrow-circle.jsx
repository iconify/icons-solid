import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c33a4rbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c33a4rbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:left-down-arrow-circle"} {...others} />);
}

export default Component;
