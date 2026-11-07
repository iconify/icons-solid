import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj6z6-b0q.css';
import '../../css/p/p9-c1gbhj.css';
import '../../css/e/eo7u7db2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hj6z6-b0q"/><path clip-rule="evenodd" class="p9-c1gbhj"/><path class="eo7u7db2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:graph-new-up-outline"} {...others} />);
}

export default Component;
