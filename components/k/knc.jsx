import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l78w82b4c.css';
import '../../css/k/kt_y30dqr.css';
import '../../css/a/ajffsljgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l78w82b4c"/><path class="kt_y30dqr"/><path class="ajffsljgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:knc"} {...others} />);
}

export default Component;
