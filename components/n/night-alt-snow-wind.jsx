import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzn_di5ne.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="zzn_di5ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:night-alt-snow-wind"} {...others} />);
}

export default Component;
