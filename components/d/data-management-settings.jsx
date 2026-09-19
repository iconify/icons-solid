import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0z2k8bik.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="g0z2k8bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:data-management-settings"} {...others} />);
}

export default Component;
