import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cidnmrdbv.css';
import '../../css/n/neifvedcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cidnmrdbv"/><path class="neifvedcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:check-square"} {...others} />);
}

export default Component;
