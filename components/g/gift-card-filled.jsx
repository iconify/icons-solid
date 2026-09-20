import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okhmtra7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okhmtra7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gift-card-filled"} {...others} />);
}

export default Component;
