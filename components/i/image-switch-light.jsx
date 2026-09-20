import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yagq6hbek.css';
import '../../css/f/f6k8znems.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yagq6hbek"/><path class="f6k8znems"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-switch-light"} {...others} />);
}

export default Component;
