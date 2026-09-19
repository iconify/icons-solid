import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aosqt_h4v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aosqt_h4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vertical-tidy-up"} {...others} />);
}

export default Component;
