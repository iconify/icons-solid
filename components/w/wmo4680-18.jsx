import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqzaw57ol.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="mqzaw57ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:wmo4680-18"} {...others} />);
}

export default Component;
