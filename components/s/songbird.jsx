import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq_mfgb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rq_mfgb2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:songbird"} {...others} />);
}

export default Component;
