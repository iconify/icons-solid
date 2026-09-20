import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzijn6bcr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lzijn6bcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:checkbox-indeterminate-variant"} {...others} />);
}

export default Component;
