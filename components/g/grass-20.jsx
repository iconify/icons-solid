import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waz_2hbmd.css';
import '../../css/e/eyzw0tyws.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="waz_2hbmd"/><path class="eyzw0tyws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grass-20"} {...others} />);
}

export default Component;
