import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auhlrw2_x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="auhlrw2_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:circle-3"} {...others} />);
}

export default Component;
