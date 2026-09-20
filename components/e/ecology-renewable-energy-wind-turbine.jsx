import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6b4ggwjw.css';
import '../../css/w/wh3bwybmx.css';
import '../../css/q/qimpewblq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="u6b4ggwjw"/><path class="wh3bwybmx"/><path class="qimpewblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-renewable-energy-wind-turbine"} {...others} />);
}

export default Component;
