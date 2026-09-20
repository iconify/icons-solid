import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6g_i0b7t.css';
import '../../css/t/tt34x7bsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6g_i0b7t"/><path class="tt34x7bsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:btcp"} {...others} />);
}

export default Component;
