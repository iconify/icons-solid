import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wn9qzm3vj.css';
import '../../css/v/v1x1grbqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wn9qzm3vj"/><path clip-rule="evenodd" class="v1x1grbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:wear-os-logo"} {...others} />);
}

export default Component;
