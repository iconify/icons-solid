import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edbh0-1ls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edbh0-1ls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:tablet-fill"} {...others} />);
}

export default Component;
