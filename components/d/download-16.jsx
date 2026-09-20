import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-tx9_o5y.css';
import '../../css/z/zi9a-zbwg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h-tx9_o5y"/><path class="zi9a-zbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:download-16"} {...others} />);
}

export default Component;
