import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vqy4eo6yp.css';
import '../../css/w/w-kr1db0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="vqy4eo6yp"/><path class="w-kr1db0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:consul-logo"} {...others} />);
}

export default Component;
