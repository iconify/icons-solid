import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc4wb_bqv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lc4wb_bqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:deployment-unit-technical-data"} {...others} />);
}

export default Component;
