import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc6rf6byt.css';
import '../../css/i/icodl6btk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hc6rf6byt"/><path class="icodl6btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-next-outline"} {...others} />);
}

export default Component;
