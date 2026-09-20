import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgd7xbcxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgd7xbcxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shovel"} {...others} />);
}

export default Component;
