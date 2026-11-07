import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/e/eaqdpdd8a.css';
import '../../css/n/nr40y6jfb.css';
import '../../css/i/ia8kjfbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="eaqdpdd8a"/><path class="nr40y6jfb"/><path class="ia8kjfbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-bold-duotone"} {...others} />);
}

export default Component;
