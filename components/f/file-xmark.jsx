import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0zmwl6su.css';
import '../../css/d/d_zjijokg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x0zmwl6su"/><path class="d_zjijokg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:file-xmark"} {...others} />);
}

export default Component;
