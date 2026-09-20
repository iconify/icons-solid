import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m65l5mb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m65l5mb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stop-circle-bold"} {...others} />);
}

export default Component;
