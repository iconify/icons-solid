import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqynkgb3j.css';
import '../../css/h/h2dipzbbx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fqynkgb3j"/><path class="h2dipzbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:zoom-out-16"} {...others} />);
}

export default Component;
