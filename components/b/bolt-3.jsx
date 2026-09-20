import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi04vibzl.css';

const viewBox = {"width":24,"height":25};
const content = `<path clip-rule="evenodd" class="hi04vibzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bolt-3"} {...others} />);
}

export default Component;
