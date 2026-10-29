import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukdrheb9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukdrheb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:a-large-small-solid"} {...others} />);
}

export default Component;
