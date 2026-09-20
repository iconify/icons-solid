import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scey3vbcr.css';
import '../../css/n/nutzz_b0r.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="scey3vbcr"/><path clip-rule="evenodd" class="nutzz_b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:snapshot-16"} {...others} />);
}

export default Component;
