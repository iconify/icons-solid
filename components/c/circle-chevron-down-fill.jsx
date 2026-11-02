import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_oos2nfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_oos2nfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circle-chevron-down-fill"} {...others} />);
}

export default Component;
