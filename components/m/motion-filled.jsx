import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snb_yq7qg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="snb_yq7qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:motion-filled"} {...others} />);
}

export default Component;
