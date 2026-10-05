import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z8e1ez1_j.css';
import '../../css/j/jjuppljnf.css';
import '../../css/s/s7vwhobch.css';
import '../../css/k/kowq38-ht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="z8e1ez1_j"/><path class="jjuppljnf"/><path class="s7vwhobch"/><path class="kowq38-ht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:undo"} {...others} />);
}

export default Component;
