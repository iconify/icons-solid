import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3ay59fmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3ay59fmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:superset-proper-of"} {...others} />);
}

export default Component;
