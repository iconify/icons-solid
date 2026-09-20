import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imtb1zu4x.css';
import '../../css/n/nhxejibsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imtb1zu4x"/><path class="nhxejibsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:snowstorm-2-fill"} {...others} />);
}

export default Component;
