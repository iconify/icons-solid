import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l-me4bncb.css';
import '../../css/p/p439a9boh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="l-me4bncb"/><path clip-rule="evenodd" class="p439a9boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:blogger-logo"} {...others} />);
}

export default Component;
