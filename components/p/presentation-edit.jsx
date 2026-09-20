import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaw0jcbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eaw0jcbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:presentation-edit"} {...others} />);
}

export default Component;
