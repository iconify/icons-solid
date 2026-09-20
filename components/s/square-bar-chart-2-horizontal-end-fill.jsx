import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt_sqrb1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mt_sqrb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-bar-chart-2-horizontal-end-fill"} {...others} />);
}

export default Component;
