import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cczy4x2em.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cczy4x2em"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cloud-lightning-rain"} {...others} />);
}

export default Component;
