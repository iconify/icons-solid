import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ieip_rbon.css';
import '../../css/y/ywjju2spm.css';
import '../../css/l/lul5q3f-j.css';
import '../../css/j/j5ajr9amr.css';
import '../../css/n/ntln6abet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ieip_rbon"/><path class="ywjju2spm"/><path class="lul5q3f-j"/><path class="j5ajr9amr"/><path class="ntln6abet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:notes-checklist-flip"} {...others} />);
}

export default Component;
