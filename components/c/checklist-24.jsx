import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw5jslsmt.css';
import '../../css/l/l5ucbdcah.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lw5jslsmt"/><path class="l5ucbdcah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:checklist-24"} {...others} />);
}

export default Component;
