import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4r97gk-c.css';

const viewBox = {"width":683,"height":819};
const content = `<path class="k4r97gk-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:kudakurage"} {...others} />);
}

export default Component;
