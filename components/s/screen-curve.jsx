import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/appne6kbn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="appne6kbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:screen-curve"} {...others} />);
}

export default Component;
