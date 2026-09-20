import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgb8wkb_n.css';
import '../../css/v/vpvf7rb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgb8wkb_n"/><path class="vpvf7rb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:qanx"} {...others} />);
}

export default Component;
