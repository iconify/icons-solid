import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbzqi4cyv.css';

const viewBox = {"width":35,"height":24};
const content = `<path class="fbzqi4cyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:volume-up"} {...others} />);
}

export default Component;
