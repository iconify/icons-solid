import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqlnzacqj.css';
import '../../css/d/ddpz1lxap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jqlnzacqj"/><path class="ddpz1lxap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-theater-active"} {...others} />);
}

export default Component;
