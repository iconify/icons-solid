import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1x756bcr.css';
import '../../css/a/av7mo7pep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1x756bcr"/><path class="av7mo7pep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-id"} {...others} />);
}

export default Component;
