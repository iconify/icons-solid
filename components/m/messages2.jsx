import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kmj_7ubfc.css';
import '../../css/l/lx14d1bki.css';
import '../../css/u/u3r5afb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kmj_7ubfc"/><path class="lx14d1bki"/><path class="u3r5afb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:messages2"} {...others} />);
}

export default Component;
