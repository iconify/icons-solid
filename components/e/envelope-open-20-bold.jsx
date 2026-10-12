import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/silr-gb_u.css';
import '../../css/t/tdqcdzb3d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="silr-gb_u"/><path class="tdqcdzb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:envelope-open-20-bold"} {...others} />);
}

export default Component;
