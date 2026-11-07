import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulv-w-b-t.css';
import '../../css/m/m6ejkju0k.css';
import '../../css/m/mv3shgefo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ulv-w-b-t"/><path class="m6ejkju0k"/><path class="mv3shgefo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-square-2-bold"} {...others} />);
}

export default Component;
