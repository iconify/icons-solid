import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/n-w-hytne.css';
import '../../css/t/tccd35b7g.css';
import '../../css/h/h8k41nbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="n-w-hytne"/><path class="tccd35b7g"/><path class="h8k41nbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:panels-top-left"} {...others} />);
}

export default Component;
