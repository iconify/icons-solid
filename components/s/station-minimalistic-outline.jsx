import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpqc5xbsu.css';
import '../../css/h/h2iv_1boz.css';
import '../../css/g/g3j7u010m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zpqc5xbsu"/><path class="h2iv_1boz"/><path clip-rule="evenodd" class="g3j7u010m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-minimalistic-outline"} {...others} />);
}

export default Component;
