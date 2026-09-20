import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os7-1hbkc.css';

const viewBox = {"width":1548,"height":786};
const content = `<path class="os7-1hbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:yapi-kredi-light"} {...others} />);
}

export default Component;
