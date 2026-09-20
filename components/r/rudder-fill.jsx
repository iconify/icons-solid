import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg9o65o-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zg9o65o-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rudder-fill"} {...others} />);
}

export default Component;
