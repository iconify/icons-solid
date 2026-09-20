import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tux8vcb7u.css';
import '../../css/o/o2g_2gj1y.css';
import '../../css/t/tg_0xsuwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="tux8vcb7u"/><path class="o2g_2gj1y"/><path class="tg_0xsuwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:kik-logo-2"} {...others} />);
}

export default Component;
