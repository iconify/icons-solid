import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uko8-ubwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uko8-ubwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:code-asterisk"} {...others} />);
}

export default Component;
