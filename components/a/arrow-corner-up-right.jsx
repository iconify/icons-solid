import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eib6rbw3u.css';
import '../../css/c/cfiem4lux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eib6rbw3u"/><path class="cfiem4lux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-corner-up-right"} {...others} />);
}

export default Component;
