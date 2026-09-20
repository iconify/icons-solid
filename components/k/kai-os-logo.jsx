import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/z8_trpbqw.css';
import '../../css/q/qf5bvwb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="z8_trpbqw"/><path class="qf5bvwb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:kai-os-logo"} {...others} />);
}

export default Component;
