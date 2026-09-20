import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9s-2fmsk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9s-2fmsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:grid-fill"} {...others} />);
}

export default Component;
