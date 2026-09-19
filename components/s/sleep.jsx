import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/eg8wnsuni.css';
import '../../css/p/p7p86-b-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="eg8wnsuni"/><path class="p7p86-b-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sleep"} {...others} />);
}

export default Component;
