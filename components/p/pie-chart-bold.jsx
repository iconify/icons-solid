import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqk9_4b2a.css';
import '../../css/r/r-rt-5hka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqk9_4b2a"/><path class="r-rt-5hka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pie-chart-bold"} {...others} />);
}

export default Component;
