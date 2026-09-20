import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw2rpwivj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zw2rpwivj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:signal-3g"} {...others} />);
}

export default Component;
