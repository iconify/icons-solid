import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b21_4_b5h.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="b21_4_b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:signal-medium-remix"} {...others} />);
}

export default Component;
