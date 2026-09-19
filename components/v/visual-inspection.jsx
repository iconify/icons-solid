import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3awx8gal.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="u3awx8gal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:visual-inspection"} {...others} />);
}

export default Component;
