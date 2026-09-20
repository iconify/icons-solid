import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx27k-jtf.css';
import '../../css/n/ngwmr6pgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wx27k-jtf"/><path class="ngwmr6pgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ttk"} {...others} />);
}

export default Component;
