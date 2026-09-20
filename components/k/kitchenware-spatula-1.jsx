import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/veyfi0f5y.css';
import '../../css/p/pg768cbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="veyfi0f5y"/><path class="pg768cbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:kitchenware-spatula-1"} {...others} />);
}

export default Component;
