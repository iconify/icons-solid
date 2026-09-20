import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbpi54-3i.css';
import '../../css/h/h4vuonvwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tbpi54-3i"/><path class="h4vuonvwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-shield-light"} {...others} />);
}

export default Component;
