import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq_6npb_q.css';
import '../../css/m/mkkiv_s3q.css';
import '../../css/d/d61yiac4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fq_6npb_q"/><path class="mkkiv_s3q"/><path class="d61yiac4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-paper-bold"} {...others} />);
}

export default Component;
