import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmvtqzacp.css';
import '../../css/a/a-jxqyhlt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmvtqzacp"/><path class="a-jxqyhlt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bible"} {...others} />);
}

export default Component;
