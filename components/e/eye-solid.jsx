import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxao0zblb.css';
import '../../css/m/mdvlj20nw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxao0zblb"/><path clip-rule="evenodd" class="mdvlj20nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:eye-solid"} {...others} />);
}

export default Component;
