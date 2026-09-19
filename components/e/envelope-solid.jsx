import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtelz6blb.css';
import '../../css/v/v45e_3b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dtelz6blb"/><path class="v45e_3b-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:envelope-solid"} {...others} />);
}

export default Component;
