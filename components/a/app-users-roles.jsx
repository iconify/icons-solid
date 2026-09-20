import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa312fb4p.css';
import '../../css/f/fl2n-_b6d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oa312fb4p"/><path class="fl2n-_b6d ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-users-roles"} {...others} />);
}

export default Component;
