import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abz4jnh1h.css';
import '../../css/f/f_bgirb9d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="abz4jnh1h"/><path class="f_bgirb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-company-filled"} {...others} />);
}

export default Component;
