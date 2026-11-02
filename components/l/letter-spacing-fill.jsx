import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cilo2uhhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cilo2uhhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:letter-spacing-fill"} {...others} />);
}

export default Component;
