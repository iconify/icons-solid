import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3fex56yy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3fex56yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sydney-opera-house-fill"} {...others} />);
}

export default Component;
