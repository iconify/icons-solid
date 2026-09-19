import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7f_7yuah.css';

const viewBox = {"width":94,"height":723};
const content = `<path class="r7f_7yuah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:quotesingle"} {...others} />);
}

export default Component;
