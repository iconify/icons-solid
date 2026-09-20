import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs4rpkbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qs4rpkbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pad-fill"} {...others} />);
}

export default Component;
