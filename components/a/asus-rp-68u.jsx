import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtvz4qqfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtvz4qqfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:asus-rp-68u"} {...others} />);
}

export default Component;
