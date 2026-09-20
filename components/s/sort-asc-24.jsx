import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i332-pb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i332-pb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:sort-asc-24"} {...others} />);
}

export default Component;
