import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh8q-t_re.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="kh8q-t_re"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:3d-rotate-y-axis-solid"} {...others} />);
}

export default Component;
