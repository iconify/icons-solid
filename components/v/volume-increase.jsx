import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko7gq5nqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ko7gq5nqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:volume-increase"} {...others} />);
}

export default Component;
