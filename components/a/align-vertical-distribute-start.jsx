import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-2k4oiuk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-2k4oiuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:align-vertical-distribute-start"} {...others} />);
}

export default Component;
