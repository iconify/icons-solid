import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh-ta55dk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gh-ta55dk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:like-placeholder"} {...others} />);
}

export default Component;
