import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgmt3t6qv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rgmt3t6qv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:luggage"} {...others} />);
}

export default Component;
