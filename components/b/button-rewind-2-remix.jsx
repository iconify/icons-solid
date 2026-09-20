import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2w1l-2qi.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r2w1l-2qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:button-rewind-2-remix"} {...others} />);
}

export default Component;
