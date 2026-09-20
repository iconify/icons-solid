import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilt_3uyjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilt_3uyjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rose-fill"} {...others} />);
}

export default Component;
