import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb2kd0rju.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rb2kd0rju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:mortgage"} {...others} />);
}

export default Component;
