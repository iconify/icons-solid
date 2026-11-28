import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/visjtcbxe.css';
import '../../css/u/uzchd2xdt.css';
import '../../css/j/j8bxxx5do.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="visjtcbxe"/><path class="uzchd2xdt"/><path class="j8bxxx5do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:foldable-stand"} {...others} />);
}

export default Component;
