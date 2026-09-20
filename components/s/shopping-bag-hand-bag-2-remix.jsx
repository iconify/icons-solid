import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9i0jpzgh.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l9i0jpzgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-bag-hand-bag-2-remix"} {...others} />);
}

export default Component;
