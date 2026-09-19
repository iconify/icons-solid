import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgmhddevn.css';
import '../../css/p/pw47icbmy.css';
import '../../css/c/cb4hdplqd.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="lgmhddevn"/><path class="pw47icbmy"/><path class="cb4hdplqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-view-alt"} {...others} />);
}

export default Component;
