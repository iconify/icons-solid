import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvv1ubwib.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rvv1ubwib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:blocks-and-arrows"} {...others} />);
}

export default Component;
