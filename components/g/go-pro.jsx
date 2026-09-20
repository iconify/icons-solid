import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lryqxpxss.css';
import '../../css/a/agh6zbcqy.css';
import '../../css/t/t0fn44bab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lryqxpxss"/><path class="agh6zbcqy"/><path class="t0fn44bab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:go-pro"} {...others} />);
}

export default Component;
