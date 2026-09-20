import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdbkcyrsw.css';
import '../../css/c/c7_pmq9wr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tdbkcyrsw"/><path class="c7_pmq9wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:1panel"} {...others} />);
}

export default Component;
