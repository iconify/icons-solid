import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfg8lvbrj.css';
import '../../css/w/whb5utbty.css';
import '../../css/f/frxdtjj9s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cfg8lvbrj"/><path class="whb5utbty"/><path class="frxdtjj9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-docs-dark"} {...others} />);
}

export default Component;
