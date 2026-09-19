import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8v583a5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r8v583a5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:corner-left-down-fill"} {...others} />);
}

export default Component;
