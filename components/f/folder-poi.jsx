import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4_y_tr5d.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="e4_y_tr5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:folder-poi"} {...others} />);
}

export default Component;
