import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe6jk7bfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xe6jk7bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:enter-door-fill"} {...others} />);
}

export default Component;
