import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7qt6_goq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n7qt6_goq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:windows-legacy"} {...others} />);
}

export default Component;
