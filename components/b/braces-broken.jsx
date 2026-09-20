import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u29u3ubqq.css';
import '../../css/b/bws08ccji.css';
import '../../css/b/by1hc2n7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u29u3ubqq"/><path class="bws08ccji"/><path class="by1hc2n7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:braces-broken"} {...others} />);
}

export default Component;
