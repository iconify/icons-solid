import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma8i4wb3d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ma8i4wb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-sleeping-in-bed"} {...others} />);
}

export default Component;
