import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq5aii1hg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lq5aii1hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:topology-star-ring-2"} {...others} />);
}

export default Component;
