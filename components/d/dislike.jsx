import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2qgdslvz.css';
import '../../css/o/o0xw4kbra.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r2qgdslvz"/><path class="o0xw4kbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:dislike"} {...others} />);
}

export default Component;
