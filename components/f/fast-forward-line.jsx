import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn0pp-bpg.css';
import '../../css/v/v3kgvknic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hn0pp-bpg"/><path class="v3kgvknic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fast-forward-line"} {...others} />);
}

export default Component;
