import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2de9_til.css';
import '../../css/e/ex7ib8bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d2de9_til"/><path class="ex7ib8bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:course-down-bold-duotone"} {...others} />);
}

export default Component;
