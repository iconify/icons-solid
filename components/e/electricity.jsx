import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7tsvw0-h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b7tsvw0-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:electricity"} {...others} />);
}

export default Component;
