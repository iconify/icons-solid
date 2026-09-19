import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1dgm2ptv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x1dgm2ptv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:bus-mini-filled"} {...others} />);
}

export default Component;
