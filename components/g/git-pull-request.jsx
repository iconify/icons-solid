import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cb_ev43di.css';
import '../../css/x/xfb-qcbda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cb_ev43di"/><path class="xfb-qcbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:git-pull-request"} {...others} />);
}

export default Component;
