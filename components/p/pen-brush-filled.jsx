import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs47u9j4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bs47u9j4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:pen-brush-filled"} {...others} />);
}

export default Component;
