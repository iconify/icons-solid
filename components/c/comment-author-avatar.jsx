import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zqepbzfoi.css';
import '../../css/k/kbbyx9vwy.css';
import '../../css/q/qp8upgb0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="zqepbzfoi"/><path vector-effect="non-scaling-stroke" class="kbbyx9vwy"/><path vector-effect="non-scaling-stroke" class="qp8upgb0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:comment-author-avatar"} {...others} />);
}

export default Component;
