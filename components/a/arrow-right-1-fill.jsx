import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz7z-qbly.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hz7z-qbly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-right-1-fill"} {...others} />);
}

export default Component;
