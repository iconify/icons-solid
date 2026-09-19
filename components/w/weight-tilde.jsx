import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gxdv0fb4f.css';
import '../../css/z/z-2xwqpol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gxdv0fb4f"/><path class="z-2xwqpol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:weight-tilde"} {...others} />);
}

export default Component;
