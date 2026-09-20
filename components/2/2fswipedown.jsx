import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw19jlmwp.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="yw19jlmwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:2fswipedown"} {...others} />);
}

export default Component;
