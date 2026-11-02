import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp5uy7o3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pp5uy7o3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:marina-bay-sand-line"} {...others} />);
}

export default Component;
