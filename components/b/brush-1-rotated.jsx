import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1ym0rb9g.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="l1ym0rb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:brush-1-rotated"} {...others} />);
}

export default Component;
