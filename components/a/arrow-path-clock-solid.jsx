import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yedj6il0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yedj6il0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-path-clock-solid"} {...others} />);
}

export default Component;
