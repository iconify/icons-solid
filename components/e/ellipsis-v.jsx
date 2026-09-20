import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kca43ld9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kca43ld9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:ellipsis-v"} {...others} />);
}

export default Component;
