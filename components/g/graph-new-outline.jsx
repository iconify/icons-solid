import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj6z6-b0q.css';
import '../../css/p/plsjqqb0l.css';
import '../../css/u/ubakjmb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hj6z6-b0q"/><path class="plsjqqb0l"/><path clip-rule="evenodd" class="ubakjmb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:graph-new-outline"} {...others} />);
}

export default Component;
