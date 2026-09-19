import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vl0sbknne.css';
import '../../css/i/ir6ml4blk.css';
import '../../css/a/anbnfobac.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVlQBebkA"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="vl0sbknne"/><path class="ir6ml4blk"/><path clip-rule="evenodd" class="anbnfobac"/></g></mask></defs><path mask="url(#SVGVlQBebkA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:painted-eggshell"} {...others} />);
}

export default Component;
