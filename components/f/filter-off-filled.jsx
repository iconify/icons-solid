import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zex0lwbtk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zex0lwbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:filter-off-filled"} {...others} />);
}

export default Component;
