import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2-9esben.css';
import '../../css/w/w04o84byj.css';
import '../../css/d/dwzrjlbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u2-9esben"/><path class="w04o84byj"/><path class="dwzrjlbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-bars-3-d-bold"} {...others} />);
}

export default Component;
