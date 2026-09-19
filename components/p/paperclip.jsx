import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy1dny6wi.css';

const viewBox = {"width":15,"height":24};
const content = `<path class="cy1dny6wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:paperclip"} {...others} />);
}

export default Component;
