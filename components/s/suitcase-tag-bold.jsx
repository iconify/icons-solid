import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prk0eb3-z.css';
import '../../css/w/w4wifcf1d.css';
import '../../css/i/iagcdmkde.css';
import '../../css/u/uwtspp4wr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="prk0eb3-z"/><path class="w4wifcf1d"/><path class="iagcdmkde"/><path class="uwtspp4wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-tag-bold"} {...others} />);
}

export default Component;
