import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8l3c2xkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q8l3c2xkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:transfer-left"} {...others} />);
}

export default Component;
