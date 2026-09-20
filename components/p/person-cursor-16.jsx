import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zror_sbrn.css';
import '../../css/c/c_5bp2b7l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zror_sbrn"/><path class="c_5bp2b7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:person-cursor-16"} {...others} />);
}

export default Component;
