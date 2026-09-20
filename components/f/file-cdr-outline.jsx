import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1q5labdl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v1q5labdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:file-cdr-outline"} {...others} />);
}

export default Component;
