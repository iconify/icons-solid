import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdy6r9b5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pdy6r9b5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:github-solid"} {...others} />);
}

export default Component;
