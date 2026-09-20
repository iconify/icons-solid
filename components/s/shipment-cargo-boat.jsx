import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h1unfjbib.css';
import '../../css/z/zpk-3obhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h1unfjbib"/><path class="zpk-3obhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-cargo-boat"} {...others} />);
}

export default Component;
