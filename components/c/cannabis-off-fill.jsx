import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmg_78b-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmg_78b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cannabis-off-fill"} {...others} />);
}

export default Component;
