import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/oz5j67byf.css';
import '../../css/z/z6b8rybzd.css';
import '../../css/c/cyquzq_sh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="oz5j67byf"/><path class="z6b8rybzd"/><path class="cyquzq_sh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:irc-galleria-logo"} {...others} />);
}

export default Component;
