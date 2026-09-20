import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdg08x6jc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdg08x6jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:email-sync-outline"} {...others} />);
}

export default Component;
