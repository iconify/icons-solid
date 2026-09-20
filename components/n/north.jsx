import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl657zm3a.css';
import '../../css/a/a8lg92bba.css';
import '../../css/k/klr2-ud7v.css';
import '../../css/h/hjso-nprq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sl657zm3a"/><path class="a8lg92bba"/><path class="klr2-ud7v"/><path class="hjso-nprq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:north"} {...others} />);
}

export default Component;
