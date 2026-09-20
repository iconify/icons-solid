import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um-rl65_a.css';
import '../../css/t/tri62lhrx.css';
import '../../css/b/bqonxyhrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="um-rl65_a"/><path class="tri62lhrx"/><path class="bqonxyhrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:time"} {...others} />);
}

export default Component;
