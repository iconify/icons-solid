import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckgm-9y5r.css';
import '../../css/v/v_xa8ibqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ckgm-9y5r"/><path class="v_xa8ibqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:programming-code-idea"} {...others} />);
}

export default Component;
