import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d09-d0b7r.css';
import '../../css/l/l44o3se9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d09-d0b7r"/><path class="l44o3se9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ball-throw-filled"} {...others} />);
}

export default Component;
