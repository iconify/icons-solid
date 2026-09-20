import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pzzcjbb8o.css';
import '../../css/d/dal7xwb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="pzzcjbb8o"/><path class="dal7xwb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:c-language-logo"} {...others} />);
}

export default Component;
