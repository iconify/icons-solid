import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za0ygy1bp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="za0ygy1bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:grid-2x2-x-fill"} {...others} />);
}

export default Component;
