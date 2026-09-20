import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fdmro_b8x.css';
import '../../css/h/hx3lo0vra.css';
import '../../css/u/u679rwbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="fdmro_b8x"/><path class="hx3lo0vra"/><path class="u679rwbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:box-logo"} {...others} />);
}

export default Component;
