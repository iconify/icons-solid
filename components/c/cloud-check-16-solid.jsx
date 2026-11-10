import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm_-n8-nm.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nm_-n8-nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:cloud-check-16-solid"} {...others} />);
}

export default Component;
