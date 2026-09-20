import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op-njnbhk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="op-njnbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-key"} {...others} />);
}

export default Component;
