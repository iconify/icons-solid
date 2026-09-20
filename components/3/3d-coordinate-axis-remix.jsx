import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-1leoezv.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="d-1leoezv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:3d-coordinate-axis-remix"} {...others} />);
}

export default Component;
