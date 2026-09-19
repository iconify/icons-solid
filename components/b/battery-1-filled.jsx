import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bin6v8b5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bin6v8b5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:battery-1-filled"} {...others} />);
}

export default Component;
