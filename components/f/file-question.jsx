import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j47t9ib-f.css';
import '../../css/c/cepji6b4b.css';
import '../../css/z/z3d835bnf.css';
import '../../css/g/g2pzkibam.css';
import '../../css/q/q-qw3vbfe.css';
import '../../css/w/wzvgqtbqa.css';
import '../../css/g/gwj64bl5p.css';
import '../../css/j/j-az2nb9c.css';
import '../../css/x/x3zeg5byq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j47t9ib-f wm-shadow"/><path class="cepji6b4b wm-k"/><path class="wm-k z3d835bnf"/><path class="g2pzkibam wm-k"/><path class="q-qw3vbfe wm-k"/><path class="wm-k wzvgqtbqa"/><path class="gwj64bl5p wm-shine"/><path class="j-az2nb9c wm-k"/><path class="wm-a x3zeg5byq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:file-question"} {...others} />);
}

export default Component;
