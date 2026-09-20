import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/als-o4ltu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="als-o4ltu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:tear"} {...others} />);
}

export default Component;
