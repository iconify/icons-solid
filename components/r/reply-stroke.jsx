import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsnyt7lwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsnyt7lwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:reply-stroke"} {...others} />);
}

export default Component;
