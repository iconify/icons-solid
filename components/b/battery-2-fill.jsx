import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxz9m7bew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxz9m7bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:battery-2-fill"} {...others} />);
}

export default Component;
