import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2dw2dclf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p2dw2dclf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:globe-24px"} {...others} />);
}

export default Component;
