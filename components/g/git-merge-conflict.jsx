import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drdp7b88c.css';
import '../../css/k/kmlwp25uw.css';
import '../../css/m/mv2rdrb9g.css';
import '../../css/y/yv3nihhdw.css';
import '../../css/b/bkxe4lo2g.css';
import '../../css/h/hk9ycgvgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="drdp7b88c"/><circle class="kmlwp25uw"/><path class="mv2rdrb9g"/><circle class="yv3nihhdw"/><circle class="bkxe4lo2g"/><path class="hk9ycgvgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-merge-conflict"} {...others} />);
}

export default Component;
