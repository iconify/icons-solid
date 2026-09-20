import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzrs1ubaa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzrs1ubaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:barrier-block"} {...others} />);
}

export default Component;
