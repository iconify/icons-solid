import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzn2sjbas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzn2sjbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:app-window-fill"} {...others} />);
}

export default Component;
