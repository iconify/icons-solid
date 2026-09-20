import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enqwc4bvf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="enqwc4bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:user-king-crown-remix"} {...others} />);
}

export default Component;
