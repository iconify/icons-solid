import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k1kaj4bsf.css';
import '../../css/a/a6vgmy7su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k1kaj4bsf"/><path class="a6vgmy7su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:electronics-led-light"} {...others} />);
}

export default Component;
