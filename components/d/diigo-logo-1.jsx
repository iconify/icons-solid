import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qot8cidje.css';
import '../../css/p/pg_rv_b8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="qot8cidje"/><path class="pg_rv_b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:diigo-logo-1"} {...others} />);
}

export default Component;
