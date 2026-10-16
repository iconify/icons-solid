import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-42pm0yt.css';
import '../../css/z/z1s72yb2q.css';
import '../../css/s/sehrn_bdd.css';
import '../../css/f/flvup0bue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c-42pm0yt"/><path class="z1s72yb2q"/><path class="sehrn_bdd"/><path class="flvup0bue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-user"} {...others} />);
}

export default Component;
