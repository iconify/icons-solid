import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we5l3ab3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="we5l3ab3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:descend"} {...others} />);
}

export default Component;
