import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gwl_u7b3t.css';
import '../../css/i/i8oxowb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="gwl_u7b3t"/><path class="i8oxowb7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:line-app-logo"} {...others} />);
}

export default Component;
