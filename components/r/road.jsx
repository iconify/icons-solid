import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk7-0nbwz.css';
import '../../css/l/lyrbudsuh.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="fk7-0nbwz"/><path class="lyrbudsuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:road"} {...others} />);
}

export default Component;
