import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ajpl9dbpk.css';
import '../../css/z/z3z439bxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ajpl9dbpk"/><path class="z3z439bxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maping"} {...others} />);
}

export default Component;
