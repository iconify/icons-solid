import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngnrofbyv.css';
import '../../css/g/gvks53lmr.css';
import '../../css/j/j04m6bc9t.css';
import '../../css/a/a87w34_cd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngnrofbyv"/><path class="gvks53lmr"/><path class="j04m6bc9t"/><path class="a87w34_cd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-stars-bold"} {...others} />);
}

export default Component;
