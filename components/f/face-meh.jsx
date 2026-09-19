import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usr8d0vnk.css';
import '../../css/k/kjfh5hbvb.css';
import '../../css/i/i69ofbxca.css';
import '../../css/l/l6ib-iflx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="usr8d0vnk"/><circle class="kjfh5hbvb"/><circle class="i69ofbxca"/><path class="l6ib-iflx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:face-meh"} {...others} />);
}

export default Component;
