import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d32l00sec.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d32l00sec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:tailless-line-arrow-horizonal-scroll-remix"} {...others} />);
}

export default Component;
