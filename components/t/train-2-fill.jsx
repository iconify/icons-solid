import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldubd87yg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ldubd87yg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:train-2-fill"} {...others} />);
}

export default Component;
