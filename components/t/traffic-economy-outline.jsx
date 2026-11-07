import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exsf8gejx.css';
import '../../css/x/x8863dbnx.css';
import '../../css/r/rgo7s3bar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exsf8gejx"/><path class="x8863dbnx"/><path class="rgo7s3bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:traffic-economy-outline"} {...others} />);
}

export default Component;
