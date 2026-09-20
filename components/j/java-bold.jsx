import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljbam2wib.css';
import '../../css/y/y_q6-lbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ljbam2wib"/><path class="y_q6-lbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:java-bold"} {...others} />);
}

export default Component;
