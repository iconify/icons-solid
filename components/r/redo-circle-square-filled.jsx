import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrk_i1wgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zrk_i1wgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:redo-circle-square-filled"} {...others} />);
}

export default Component;
