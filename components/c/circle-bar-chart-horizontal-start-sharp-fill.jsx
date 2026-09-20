import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo28neb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xo28neb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-bar-chart-horizontal-start-sharp-fill"} {...others} />);
}

export default Component;
