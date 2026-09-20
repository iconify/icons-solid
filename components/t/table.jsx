import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/phjvadcnz.css';
import '../../css/k/kta22xb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="phjvadcnz"/><path class="kta22xb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:table"} {...others} />);
}

export default Component;
