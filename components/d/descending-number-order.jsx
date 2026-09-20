import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/y/y-mtz-ngn.css';
import '../../css/g/gqzuxer4s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="y-mtz-ngn"/><path class="gqzuxer4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:descending-number-order"} {...others} />);
}

export default Component;
