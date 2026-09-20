import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o23mbdcfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o23mbdcfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:genesis-l1"} {...others} />);
}

export default Component;
