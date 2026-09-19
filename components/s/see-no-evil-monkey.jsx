import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3en6l9po.css';
import '../../css/y/yft-n4b2i.css';
import '../../css/t/toc-k6blg.css';
import '../../css/m/mhmxq_bwj.css';
import '../../css/o/o6uyd1bub.css';
import '../../css/f/ftsfnkbaa.css';
import '../../css/c/casezkboa.css';
import '../../css/x/xvo-umbks.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="i3en6l9po"/><path class="yft-n4b2i"/><path class="toc-k6blg"/><path class="mhmxq_bwj"/><path class="o6uyd1bub"/><path class="ftsfnkbaa"/><path class="casezkboa"/><path class="xvo-umbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:see-no-evil-monkey"} {...others} />);
}

export default Component;
