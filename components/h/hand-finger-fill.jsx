import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbr4ir6uw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lbr4ir6uw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hand-finger-fill"} {...others} />);
}

export default Component;
