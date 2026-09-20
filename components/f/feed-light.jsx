import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oquc4acgh.css';
import '../../css/y/yk5n1ybrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oquc4acgh"/><path class="yk5n1ybrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:feed-light"} {...others} />);
}

export default Component;
