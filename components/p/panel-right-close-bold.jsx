import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojtd7k2go.css';
import '../../css/d/dkbffkbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ojtd7k2go"/><path class="dkbffkbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-right-close-bold"} {...others} />);
}

export default Component;
