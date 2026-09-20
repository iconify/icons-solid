import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1pe9xbbf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h1pe9xbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:work-item-feature"} {...others} />);
}

export default Component;
