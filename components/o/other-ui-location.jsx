import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r46rmpwwu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r46rmpwwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-location"} {...others} />);
}

export default Component;
