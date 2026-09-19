import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko_3_kw6e.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ko_3_kw6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:pen-to-square"} {...others} />);
}

export default Component;
