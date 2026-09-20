import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo_qq2bqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uo_qq2bqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-new-round-outline"} {...others} />);
}

export default Component;
