import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sdfs1dbfw.css';
import '../../css/z/zujceqbxj.css';
import '../../css/d/di9ycbc0b.css';
import '../../css/q/qww2x6b-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sdfs1dbfw"/><path class="zujceqbxj"/><path class="di9ycbc0b"/><path class="qww2x6b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cash-briefcase"} {...others} />);
}

export default Component;
