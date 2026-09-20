import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnyr7tqvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fnyr7tqvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:dislike-fill"} {...others} />);
}

export default Component;
