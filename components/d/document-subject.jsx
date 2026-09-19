import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds1hiib0s.css';
import '../../css/q/qth2s3b6m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ds1hiib0s"/><path class="qth2s3b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-subject"} {...others} />);
}

export default Component;
