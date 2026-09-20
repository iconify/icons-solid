import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_sxxjbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_sxxjbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:percent-duotone"} {...others} />);
}

export default Component;
