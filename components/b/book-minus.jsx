import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf2j8ceay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf2j8ceay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:book-minus"} {...others} />);
}

export default Component;
