import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg261rb8a.css';
import '../../css/w/w8x_vkwlh.css';
import '../../css/l/lc21qzuqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rg261rb8a"/><path clip-rule="evenodd" class="w8x_vkwlh"/><path class="lc21qzuqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-minus-bold"} {...others} />);
}

export default Component;
