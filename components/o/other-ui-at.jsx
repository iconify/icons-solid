import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgnxe6t6b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fgnxe6t6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-at"} {...others} />);
}

export default Component;
