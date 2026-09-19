import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avl2890wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="avl2890wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:folder-open-outline"} {...others} />);
}

export default Component;
