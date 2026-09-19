import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2og0bbcd.css';
import '../../css/s/soxl3mbuf.css';
import '../../css/n/neyeefyib.css';
import '../../css/c/ckq9usufc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKVaS6hSx"><g class="ft5dv1b6b"><path class="z2og0bbcd"/><path class="soxl3mbuf"/><path class="neyeefyib"/><path class="ckq9usufc"/></g></mask></defs><path mask="url(#SVGKVaS6hSx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mail-download"} {...others} />);
}

export default Component;
