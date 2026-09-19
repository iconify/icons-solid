import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cww7r3ejt.css';
import '../../css/t/tt10iz6wh.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="cww7r3ejt"/><path class="tt10iz6wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:redo"} {...others} />);
}

export default Component;
