import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbjargc9p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tbjargc9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:chevron-down-up-16-solid"} {...others} />);
}

export default Component;
