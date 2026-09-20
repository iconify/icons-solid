import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2clycb-g.css';
import '../../css/w/wpypx_dri.css';
import '../../css/f/fdhg8oy1z.css';
import '../../css/g/gsdiynbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j2clycb-g"/><path class="wpypx_dri"/><path clip-rule="evenodd" class="fdhg8oy1z"/><path class="gsdiynbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:items-tree-24"} {...others} />);
}

export default Component;
