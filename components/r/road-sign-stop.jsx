import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gu-edh1mv.css';
import '../../css/p/pgnmi7bkq.css';
import '../../css/o/oi9f8ebmy.css';
import '../../css/s/sj5jaeqkj.css';
import '../../css/o/o-6ip5p-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gu-edh1mv"/><path class="pgnmi7bkq"/><path class="oi9f8ebmy"/><path class="sj5jaeqkj"/><path class="o-6ip5p-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:road-sign-stop"} {...others} />);
}

export default Component;
