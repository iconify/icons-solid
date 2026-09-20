import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2hdh4u_p.css';
import '../../css/u/uoq1u0bje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2hdh4u_p"/><path class="uoq1u0bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:home-duotone"} {...others} />);
}

export default Component;
