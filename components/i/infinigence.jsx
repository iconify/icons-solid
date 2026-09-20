import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyfj73g9f.css';
import '../../css/v/vkc1wcb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pyfj73g9f"/><path class="vkc1wcb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:infinigence"} {...others} />);
}

export default Component;
