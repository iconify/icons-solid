import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sjowjbelj.css';
import '../../css/x/xtis6o3so.css';
import '../../css/t/tuzwhbc4c.css';
import '../../css/v/v8gyovbgp.css';
import '../../css/j/jryg5tbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sjowjbelj"/><path class="xtis6o3so"/><path class="tuzwhbc4c"/><path class="v8gyovbgp"/><path class="jryg5tbgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:building-05"} {...others} />);
}

export default Component;
