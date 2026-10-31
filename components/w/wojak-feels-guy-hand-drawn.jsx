import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eb17y1b5d.css';
import '../../css/m/m4o9soagf.css';
import '../../css/b/byi6-jp3p.css';
import '../../css/n/njnr53btp.css';
import '../../css/u/ussegpbph.css';
import '../../css/t/t5qccvi6c.css';
import '../../css/u/utcgrqb4c.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eb17y1b5d"/><path class="m4o9soagf"/><path class="byi6-jp3p"/><path class="njnr53btp"/><path class="ussegpbph"/><path class="t5qccvi6c"/><path class="utcgrqb4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:wojak-feels-guy-hand-drawn"} {...others} />);
}

export default Component;
