import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsar8eb2v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dsar8eb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:hight-lessen-outline"} {...others} />);
}

export default Component;
