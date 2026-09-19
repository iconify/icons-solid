import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-a17nn7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p-a17nn7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:google-drive-check"} {...others} />);
}

export default Component;
