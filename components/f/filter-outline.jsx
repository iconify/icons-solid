import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz-n4tbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mz-n4tbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:filter-outline"} {...others} />);
}

export default Component;
