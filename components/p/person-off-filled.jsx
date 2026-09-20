import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eusm4q.css';
import '../../css/i/igi9we.css';
import '../../css/t/t5pxry.css';
import '../../css/j/j46_iu.css';
import '../../css/e/eycklu.css';
import '../../css/g/grlnmu.css';
import '../../css/b/botfzx.css';
import '../../css/f/f59n3y.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGrOJgUb6k"><path class="eusm4q igi9we t5pxry"/><path class="eusm4q j46_iu t5pxry"/><path class="eycklu grlnmu t5pxry"/></mask></defs><path mask="url(#SVGrOJgUb6k)" class="botfzx"/><path class="eycklu f59n3y t5pxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:person-off-filled"} {...others} />);
}

export default Component;
