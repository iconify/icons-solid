import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl69qz8ca.css';
import '../../css/b/b5aw_lbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl69qz8ca"/><rect class="b5aw_lbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:margin-left-filled"} {...others} />);
}

export default Component;
