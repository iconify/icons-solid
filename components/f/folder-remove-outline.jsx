import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxhu5hnug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lxhu5hnug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folder-remove-outline"} {...others} />);
}

export default Component;
