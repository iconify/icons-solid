import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6v-cu3kr.css';
import '../../css/o/o-mw0gu8c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a6v-cu3kr"/><path class="o-mw0gu8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:settings-48"} {...others} />);
}

export default Component;
