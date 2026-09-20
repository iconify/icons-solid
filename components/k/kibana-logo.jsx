import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/d9w5sob4s.css';
import '../../css/l/lkq9hjb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="d9w5sob4s"/><path class="lkq9hjb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:kibana-logo"} {...others} />);
}

export default Component;
