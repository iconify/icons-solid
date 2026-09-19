import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvf-84bqy.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="nvf-84bqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:face-very-happy-stroke-12"} {...others} />);
}

export default Component;
