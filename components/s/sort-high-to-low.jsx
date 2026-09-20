import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hikc9m3jn.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="hikc9m3jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:sort-high-to-low"} {...others} />);
}

export default Component;
