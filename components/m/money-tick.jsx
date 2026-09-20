import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lh6ix6bdu.css';
import '../../css/h/hfz_8abyz.css';
import '../../css/x/xme47371x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lh6ix6bdu"/><path class="hfz_8abyz"/><path class="xme47371x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-tick"} {...others} />);
}

export default Component;
