import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkzge6j-e.css';
import '../../css/j/jd1l75b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mkzge6j-e"/><path class="jd1l75b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-square-2-bold"} {...others} />);
}

export default Component;
