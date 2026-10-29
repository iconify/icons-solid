import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axw66dbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="axw66dbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-archive"} {...others} />);
}

export default Component;
