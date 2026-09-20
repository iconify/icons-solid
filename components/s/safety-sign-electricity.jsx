import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu4c-gk5y.css';
import '../../css/b/b76l5ee_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zu4c-gk5y"/><path class="b76l5ee_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:safety-sign-electricity"} {...others} />);
}

export default Component;
