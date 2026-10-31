import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv5n6wbmc.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="iv5n6wbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:snowflake-16-solid"} {...others} />);
}

export default Component;
