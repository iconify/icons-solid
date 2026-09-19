import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp_jc4bkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sp_jc4bkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ikea-gunnarp-round"} {...others} />);
}

export default Component;
