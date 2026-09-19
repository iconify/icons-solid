import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grhpbbc3o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="grhpbbc3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:pinterest2"} {...others} />);
}

export default Component;
