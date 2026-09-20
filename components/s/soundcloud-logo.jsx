import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/su5rmfboh.css';
import '../../css/j/jxc3szl7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="su5rmfboh"/><path class="jxc3szl7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:soundcloud-logo"} {...others} />);
}

export default Component;
