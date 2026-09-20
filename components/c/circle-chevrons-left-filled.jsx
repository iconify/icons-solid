import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfys5y2ji.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfys5y2ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-chevrons-left-filled"} {...others} />);
}

export default Component;
