import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-nj7cajn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g-nj7cajn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:embed-video"} {...others} />);
}

export default Component;
