import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_wj-xxom.css';
import '../../css/c/ccctyvx2l.css';
import '../../css/d/dfigtwblb.css';
import '../../css/e/ez96tu5ot.css';
import '../../css/i/irij60t6g.css';
import '../../css/i/iisff-bfr.css';
import '../../css/s/s7w2cm6mf.css';
import '../../css/o/oaejw9atz.css';
import '../../css/j/jky4oqbxw.css';
import '../../css/g/g8w21ab9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="s_wj-xxom"/><path class="ccctyvx2l"/><path class="dfigtwblb"/><circle class="ez96tu5ot"/><circle class="irij60t6g"/><circle class="iisff-bfr"/><path class="s7w2cm6mf"/><path class="oaejw9atz"/><rect class="jky4oqbxw"/><path class="g8w21ab9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-pr-lock"} {...others} />);
}

export default Component;
