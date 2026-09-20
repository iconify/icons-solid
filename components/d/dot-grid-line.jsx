import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg7duf-dx.css';
import '../../css/j/j1uuoibsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hg7duf-dx"/><path class="j1uuoibsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dot-grid-line"} {...others} />);
}

export default Component;
