import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r07u4nbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r07u4nbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:cbs-sports"} {...others} />);
}

export default Component;
