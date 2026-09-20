import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b430c0b3m.css';
import '../../css/t/tvql3c4ij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b430c0b3m"/><path class="tvql3c4ij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:moderate-snow-fill"} {...others} />);
}

export default Component;
