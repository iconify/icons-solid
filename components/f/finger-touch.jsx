import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuhjp4b3q.css';
import '../../css/s/sx7umwbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wuhjp4b3q"/><path class="sx7umwbzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:finger-touch"} {...others} />);
}

export default Component;
