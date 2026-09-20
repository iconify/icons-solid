import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg94i5mch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zg94i5mch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:home-9-line"} {...others} />);
}

export default Component;
