import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u43a0_poh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="u43a0_poh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-curve-right-up-16-solid"} {...others} />);
}

export default Component;
