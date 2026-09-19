import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcw_0vb3n.css';
import '../../css/r/ro-apk0gw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xcw_0vb3n"/><path class="ro-apk0gw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:scan"} {...others} />);
}

export default Component;
