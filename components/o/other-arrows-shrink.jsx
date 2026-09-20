import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpamm-b6d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wpamm-b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-arrows-shrink"} {...others} />);
}

export default Component;
