import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phvm0umma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="phvm0umma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arow-to-down-line"} {...others} />);
}

export default Component;
