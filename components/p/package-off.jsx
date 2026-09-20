import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4m5ykbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4m5ykbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:package-off"} {...others} />);
}

export default Component;
