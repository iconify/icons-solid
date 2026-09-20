import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8chphb8w.css';
import '../../css/k/kpuc3bbvl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l8chphb8w"/><path clip-rule="evenodd" class="kpuc3bbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:select-all-16"} {...others} />);
}

export default Component;
