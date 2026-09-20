import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t76ezw5zz.css';
import '../../css/v/vah_3dbqa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t76ezw5zz"/><path class="vah_3dbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pixelfin"} {...others} />);
}

export default Component;
