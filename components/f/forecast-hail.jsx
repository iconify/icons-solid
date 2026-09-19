import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-x0dsblc.css';
import '../../css/j/jyigv8bzh.css';
import '../../css/j/j7ox4ikmh.css';
import '../../css/u/uii4avzkv.css';
import '../../css/v/vtm294vds.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o-x0dsblc"/><circle class="jyigv8bzh"/><circle class="j7ox4ikmh"/><circle class="uii4avzkv"/><path class="vtm294vds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:forecast-hail"} {...others} />);
}

export default Component;
