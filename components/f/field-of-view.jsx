import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df7_jw1qt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="df7_jw1qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:field-of-view"} {...others} />);
}

export default Component;
