import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gumqc9euk.css';
import '../../css/o/o72hprbat.css';
import '../../css/s/sh-eo5bhv.css';
import '../../css/n/n9glzw75q.css';
import '../../css/t/t92c_ibzm.css';
import '../../css/c/c0kc3m79n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="gumqc9euk"/><ellipse class="o72hprbat"/><path class="sh-eo5bhv"/><path clip-rule="evenodd" class="n9glzw75q"/><path class="t92c_ibzm"/><path class="c0kc3m79n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:app-window-globe"} {...others} />);
}

export default Component;
