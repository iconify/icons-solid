import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrbc_pbor.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrbc_pbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-hour-10"} {...others} />);
}

export default Component;
