import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc-3-bc9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gc-3-bc9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bolt-circle-bold"} {...others} />);
}

export default Component;
