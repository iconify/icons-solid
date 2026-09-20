import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9m6r4twc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p9m6r4twc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mobiledata-off"} {...others} />);
}

export default Component;
