import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dak2kq27q.css';
import '../../css/e/e6x_lacct.css';
import '../../css/v/v9b-7-bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dak2kq27q"/><path class="e6x_lacct"/><path class="v9b-7-bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-animate-logo"} {...others} />);
}

export default Component;
