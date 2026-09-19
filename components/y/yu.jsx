import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wqbbqwb-i.css';
import '../../css/w/w260_6bbu.css';
import '../../css/b/b2n3vku2e.css';
import '../../css/n/n8gmovbqt.css';
import '../../css/x/xwbp-8bsj.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wqbbqwb-i"/><path class="w260_6bbu"/><path class="b2n3vku2e"/><path class="n8gmovbqt"/><path class="xwbp-8bsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:yu"} {...others} />);
}

export default Component;
