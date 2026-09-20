import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf0pdw_6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zf0pdw_6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:bell-fill-24"} {...others} />);
}

export default Component;
