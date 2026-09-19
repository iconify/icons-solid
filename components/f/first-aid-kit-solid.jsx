import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztw00-h6s.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="ztw00-h6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:first-aid-kit-solid"} {...others} />);
}

export default Component;
