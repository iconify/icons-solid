import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l80-m056n.css';
import '../../css/y/y_yfhhb9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="l80-m056n"/><path class="y_yfhhb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:alipay-logo"} {...others} />);
}

export default Component;
