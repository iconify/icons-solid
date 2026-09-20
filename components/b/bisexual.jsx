import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vymljlban.css';
import '../../css/x/xsmx0tbhg.css';
import '../../css/z/z4_ceb6qa.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vymljlban"/><path class="xsmx0tbhg"/><path class="z4_ceb6qa"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bisexual"} {...others} />);
}

export default Component;
