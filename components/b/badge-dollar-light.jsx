import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fujslo8xa.css';
import '../../css/h/hchurepih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fujslo8xa"/><path class="hchurepih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:badge-dollar-light"} {...others} />);
}

export default Component;
