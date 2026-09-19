import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2x8u-v_h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o2x8u-v_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:templatetoolkit"} {...others} />);
}

export default Component;
