import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/c/c3ctpngqm.css';
import '../../css/s/s4r7xqb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="aqhok2bbj"/><path class="c3ctpngqm"/><path class="s4r7xqb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:mention"} {...others} />);
}

export default Component;
