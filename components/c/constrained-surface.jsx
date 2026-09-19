import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kko0stbbj.css';
import '../../css/z/z31pkdfpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kko0stbbj"/><path class="z31pkdfpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:constrained-surface"} {...others} />);
}

export default Component;
