import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6-now6rb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q6-now6rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:bookmark-fill"} {...others} />);
}

export default Component;
