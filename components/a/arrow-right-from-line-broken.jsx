import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bjr4uf7pk.css';
import '../../css/y/ymvg5pbqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bjr4uf7pk"/><path class="ymvg5pbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-from-line-broken"} {...others} />);
}

export default Component;
