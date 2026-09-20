import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/i/imy0i1b4g.css';
import '../../css/y/yn9i0v84q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="imy0i1b4g"/><path class="yn9i0v84q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:angular-logo"} {...others} />);
}

export default Component;
