import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsqb0y01i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fsqb0y01i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:github-alt"} {...others} />);
}

export default Component;
