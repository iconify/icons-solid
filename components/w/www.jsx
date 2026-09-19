import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b4ju2dkmd.css';
import '../../css/m/meben3t1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b4ju2dkmd"/><path class="meben3t1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:www"} {...others} />);
}

export default Component;
