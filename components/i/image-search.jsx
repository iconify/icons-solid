import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocxedjb1h.css';
import '../../css/h/hh28l1bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ocxedjb1h"/><path class="hh28l1bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-search"} {...others} />);
}

export default Component;
