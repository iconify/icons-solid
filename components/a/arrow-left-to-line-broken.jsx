import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eoe13w36s.css';
import '../../css/b/bjr4uf7pk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eoe13w36s"/><path class="bjr4uf7pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-to-line-broken"} {...others} />);
}

export default Component;
