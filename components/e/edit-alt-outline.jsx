import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-w7s1bmt.css';
import '../../css/y/ys8pa0b4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z-w7s1bmt"/><path class="ys8pa0b4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:edit-alt-outline"} {...others} />);
}

export default Component;
