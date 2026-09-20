import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf1i8ngqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gf1i8ngqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:autodesk-revit"} {...others} />);
}

export default Component;
