import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym5ag0pcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ym5ag0pcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:send-to-back"} {...others} />);
}

export default Component;
