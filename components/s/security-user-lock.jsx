import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asy189blx.css';
import '../../css/l/lveuvsb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="asy189blx"/><path class="lveuvsb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-user-lock"} {...others} />);
}

export default Component;
