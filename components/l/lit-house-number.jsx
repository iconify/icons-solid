import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya7p8kszo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ya7p8kszo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lit-house-number"} {...others} />);
}

export default Component;
