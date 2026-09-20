import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jydc_mb-y.css';
import '../../css/t/tbcp7-bab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jydc_mb-y"/><path class="tbcp7-bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:single-select-24"} {...others} />);
}

export default Component;
