import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht-s7mkzr.css';

const viewBox = {"width":1792,"height":1632};
const content = `<path class="ht-s7mkzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:naver"} {...others} />);
}

export default Component;
