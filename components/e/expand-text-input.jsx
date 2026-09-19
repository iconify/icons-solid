import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vf-ij7u5s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vf-ij7u5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:expand-text-input"} {...others} />);
}

export default Component;
