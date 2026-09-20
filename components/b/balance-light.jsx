import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry6canfiv.css';
import '../../css/r/re9d9lkhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ry6canfiv"/><path class="re9d9lkhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:balance-light"} {...others} />);
}

export default Component;
