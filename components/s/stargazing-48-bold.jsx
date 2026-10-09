import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqy6lhb1f.css';
import '../../css/o/oz0-7c0kb.css';
import '../../css/n/n2f3vcc0n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jqy6lhb1f"/><path class="oz0-7c0kb"/><path class="n2f3vcc0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stargazing-48-bold"} {...others} />);
}

export default Component;
