import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrd_c7u5u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vrd_c7u5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:file-xls-outline"} {...others} />);
}

export default Component;
