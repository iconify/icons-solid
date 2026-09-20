import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc7as45mv.css';
import '../../css/n/nsrryibqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tc7as45mv"/><path clip-rule="evenodd" class="nsrryibqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:delete-alarm-fill"} {...others} />);
}

export default Component;
