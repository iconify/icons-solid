import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh3vw1bag.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lh3vw1bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:laraveljetstream-wordmark"} {...others} />);
}

export default Component;
