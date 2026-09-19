import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgl8xnb3r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zgl8xnb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:align-text-middle"} {...others} />);
}

export default Component;
