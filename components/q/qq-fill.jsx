import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzru7zzlp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nzru7zzlp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:qq-fill"} {...others} />);
}

export default Component;
