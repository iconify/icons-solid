import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ur4tlhb7f.css';
import '../../css/o/om1x-cleu.css';
import '../../css/a/axeh-i51j.css';
import '../../css/x/x0idx2b_y.css';
import '../../css/n/nymwdbb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ur4tlhb7f"/><circle class="om1x-cleu"/><path class="axeh-i51j"/><path class="x0idx2b_y"/><path class="nymwdbb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:virus-off"} {...others} />);
}

export default Component;
