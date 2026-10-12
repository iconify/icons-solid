import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_wj-xxom.css';
import '../../css/c/chb21db6u.css';
import '../../css/e/ez96tu5ot.css';
import '../../css/i/irij60t6g.css';
import '../../css/i/iisff-bfr.css';
import '../../css/q/q789vsbqa.css';
import '../../css/o/oaejw9atz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="s_wj-xxom"/><path class="chb21db6u"/><circle class="ez96tu5ot"/><circle class="irij60t6g"/><circle class="iisff-bfr"/><path class="q789vsbqa"/><path class="oaejw9atz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-pr-plus"} {...others} />);
}

export default Component;
