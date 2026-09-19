import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3vxumw8s.css';
import '../../css/g/gkjqfnbjw.css';
import '../../css/g/g7isto0zn.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="v3vxumw8s"/><path class="gkjqfnbjw"/><path class="g7isto0zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:container-runtime-monitor"} {...others} />);
}

export default Component;
