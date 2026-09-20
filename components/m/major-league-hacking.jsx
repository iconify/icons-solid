import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v30yy3gey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v30yy3gey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:major-league-hacking"} {...others} />);
}

export default Component;
