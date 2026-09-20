import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkk9eypgg.css';
import '../../css/a/a-7wv5c3g.css';
import '../../css/c/c3zr_bbak.css';
import '../../css/p/pw6184nnw.css';
import '../../css/q/qna1ceivw.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/z_kgij4ga.css';
import '../../css/o/okd8f6rrn.css';
import '../../css/u/uywycjbbq.css';
import '../../css/z/zweurqmez.css';
import '../../css/m/mp7mwbc3i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bkk9eypgg"/><circle class="a-7wv5c3g"/><circle class="c3zr_bbak"/><circle class="pw6184nnw"/><path class="qna1ceivw"/><g class="ij2x_72vy"><path class="z_kgij4ga"/><circle class="okd8f6rrn"/><circle class="uywycjbbq"/><circle class="zweurqmez"/><path class="mp7mwbc3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:motor"} {...others} />);
}

export default Component;
