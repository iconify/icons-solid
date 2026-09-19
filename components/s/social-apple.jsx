import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e6c-cgbkv.css';
import '../../css/p/pcjn26jew.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e6c-cgbkv"/><path class="pcjn26jew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-apple"} {...others} />);
}

export default Component;
