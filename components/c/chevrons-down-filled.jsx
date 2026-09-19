import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7edix8yx.css';
import '../../css/f/f-emzobbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7edix8yx"/><path class="f-emzobbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chevrons-down-filled"} {...others} />);
}

export default Component;
