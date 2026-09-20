import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j697l3uzc.css';
import '../../css/j/jqnuk2brh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="j697l3uzc"/><path class="jqnuk2brh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:ello-logo"} {...others} />);
}

export default Component;
