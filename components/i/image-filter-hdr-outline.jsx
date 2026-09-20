import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb8deqrdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eb8deqrdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:image-filter-hdr-outline"} {...others} />);
}

export default Component;
