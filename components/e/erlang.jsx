import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/j/jvs36jb7r.css';
import '../../css/z/zh0u5edtk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="jvs36jb7r"/><path class="zh0u5edtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:erlang"} {...others} />);
}

export default Component;
