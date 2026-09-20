import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltq07achs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ltq07achs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:apartments-5-story-skillion-roof"} {...others} />);
}

export default Component;
