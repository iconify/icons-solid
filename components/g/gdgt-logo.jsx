import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/oy6pa2bwd.css';
import '../../css/e/eu2em5l2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="oy6pa2bwd"/><path class="eu2em5l2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gdgt-logo"} {...others} />);
}

export default Component;
