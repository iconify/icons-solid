import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg-3vud6u.css';
import '../../css/p/p04h_vw0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg-3vud6u"/><path class="p04h_vw0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:zoom-in-page-bold"} {...others} />);
}

export default Component;
