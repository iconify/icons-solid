import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv3i7l7nl.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tv3i7l7nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:pin-16-solid"} {...others} />);
}

export default Component;
