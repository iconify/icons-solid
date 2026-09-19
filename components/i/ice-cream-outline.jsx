import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bem5i2brp.css';
import '../../css/c/cohp0c6uv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bem5i2brp"/><path class="cohp0c6uv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ice-cream-outline"} {...others} />);
}

export default Component;
