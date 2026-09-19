import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df1gw3ghw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="df1gw3ghw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:rvn"} {...others} />);
}

export default Component;
