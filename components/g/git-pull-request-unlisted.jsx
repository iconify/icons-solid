import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kps4-xb-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kps4-xb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-pull-request-unlisted"} {...others} />);
}

export default Component;
