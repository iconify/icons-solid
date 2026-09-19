import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd3ym2bee.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nd3ym2bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-down-6-circle-fill"} {...others} />);
}

export default Component;
