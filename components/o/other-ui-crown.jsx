import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs5l0aben.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fs5l0aben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-crown"} {...others} />);
}

export default Component;
