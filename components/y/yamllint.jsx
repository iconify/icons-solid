import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alm0-u9-r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="alm0-u9-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:yamllint"} {...others} />);
}

export default Component;
