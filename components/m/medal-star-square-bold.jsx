import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5xllqbwr.css';
import '../../css/z/zzstyjb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e5xllqbwr"/><path class="zzstyjb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-square-bold"} {...others} />);
}

export default Component;
