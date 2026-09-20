import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq14b5_xz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rq14b5_xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:diary-fill"} {...others} />);
}

export default Component;
