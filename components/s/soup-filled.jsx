import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt6ic24ut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt6ic24ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:soup-filled"} {...others} />);
}

export default Component;
