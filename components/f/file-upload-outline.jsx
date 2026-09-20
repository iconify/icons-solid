import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jps7tfbgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jps7tfbgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-upload-outline"} {...others} />);
}

export default Component;
