import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkmcn9brz.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="bkmcn9brz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:tablet-capsule-remix"} {...others} />);
}

export default Component;
