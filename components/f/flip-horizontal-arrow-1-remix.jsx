import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1nh9mbcz.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="o1nh9mbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:flip-horizontal-arrow-1-remix"} {...others} />);
}

export default Component;
