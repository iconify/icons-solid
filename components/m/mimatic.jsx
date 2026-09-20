import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9abw714l.css';
import '../../css/o/oulxfua7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9abw714l"/><path clip-rule="evenodd" class="oulxfua7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mimatic"} {...others} />);
}

export default Component;
