import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t0-afhbzf.css';
import '../../css/g/gm5by03kn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t0-afhbzf"/><path class="gm5by03kn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:telescope-line-duotone"} {...others} />);
}

export default Component;
