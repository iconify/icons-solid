import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsvkrrtht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tsvkrrtht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:tailwind-css-fill"} {...others} />);
}

export default Component;
