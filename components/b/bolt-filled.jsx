import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh5h3c62c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh5h3c62c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bolt-filled"} {...others} />);
}

export default Component;
