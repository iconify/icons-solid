import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p47sh4b8i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p47sh4b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:connector-type-e"} {...others} />);
}

export default Component;
