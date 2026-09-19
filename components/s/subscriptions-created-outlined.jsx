import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-dvcfb3w.css';
import '../../css/f/fcilczb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-dvcfb3w"/><path class="fcilczb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:subscriptions-created-outlined"} {...others} />);
}

export default Component;
