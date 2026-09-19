import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmi7qy-ke.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pmi7qy-ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:window-terminal"} {...others} />);
}

export default Component;
