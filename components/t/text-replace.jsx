import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xk8wz3tom.css';
import '../../css/g/g-n1nh9sq.css';
import '../../css/z/z0p5lsbke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xk8wz3tom"/><path class="g-n1nh9sq"/><path class="z0p5lsbke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-replace"} {...others} />);
}

export default Component;
