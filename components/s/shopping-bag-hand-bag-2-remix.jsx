import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz55z5bay.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="uz55z5bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:shopping-bag-hand-bag-2-remix"} {...others} />);
}

export default Component;
