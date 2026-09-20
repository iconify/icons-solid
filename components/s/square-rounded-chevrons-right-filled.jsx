import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smx79xg7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smx79xg7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-rounded-chevrons-right-filled"} {...others} />);
}

export default Component;
