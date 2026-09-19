import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe4_vg-gn.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="xe4_vg-gn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:star-half-alt"} {...others} />);
}

export default Component;
