import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9ohq6b2l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n9ohq6b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:magnifying-glass"} {...others} />);
}

export default Component;
