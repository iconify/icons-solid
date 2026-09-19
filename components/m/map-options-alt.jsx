import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm_6fobjp.css';
import '../../css/h/h1ytemzns.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="hm_6fobjp"/><path class="h1ytemzns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-options-alt"} {...others} />);
}

export default Component;
