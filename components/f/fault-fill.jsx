import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abrao85rm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="abrao85rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fault-fill"} {...others} />);
}

export default Component;
