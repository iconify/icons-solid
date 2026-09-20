import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-9u4rbzt.css';
import '../../css/y/yplakhjvl.css';
import '../../css/e/ehp5qv0lz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f-9u4rbzt"/><path class="yplakhjvl"/><path class="ehp5qv0lz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:dentistry-tooth-chipped"} {...others} />);
}

export default Component;
