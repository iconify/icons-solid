import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv1yczbez.css';
import '../../css/e/enk161xfw.css';
import '../../css/t/trgl4klpj.css';
import '../../css/a/aj84m6bhf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gv1yczbez"/><path class="enk161xfw"/><path class="trgl4klpj"/><path class="aj84m6bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gazebo"} {...others} />);
}

export default Component;
