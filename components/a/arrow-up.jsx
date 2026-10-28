import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk5rw_b0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nk5rw_b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:arrow-up"} {...others} />);
}

export default Component;
