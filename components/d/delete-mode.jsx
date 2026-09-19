import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7g8vpbdo.css';
import '../../css/t/twovfhblf.css';
import '../../css/o/oi613jb8b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l7g8vpbdo"><path class="twovfhblf"/><path class="oi613jb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:delete-mode"} {...others} />);
}

export default Component;
