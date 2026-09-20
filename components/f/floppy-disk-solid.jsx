import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j05mr2p2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j05mr2p2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:floppy-disk-solid"} {...others} />);
}

export default Component;
