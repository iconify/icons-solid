import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm-3jmkwj.css';

const viewBox = {"width":3035,"height":634};
const content = `<path class="fm-3jmkwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:buffalo"} {...others} />);
}

export default Component;
