import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4qjz4jhf.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b4qjz4jhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:face-meh-16-solid"} {...others} />);
}

export default Component;
