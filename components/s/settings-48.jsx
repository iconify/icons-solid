import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggy55cbvx.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVG0xCLleNy)" class="ggy55cbvx"/><defs><linearGradient id="SVG0xCLleNy" x1="33.588" x2="11.226" y1="42.451" y2="7.607" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:settings-48"} {...others} />);
}

export default Component;
