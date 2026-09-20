import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/g01bmcbzw.css';
import '../../css/z/zwtfweozy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="g01bmcbzw"/><path class="zwtfweozy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dark-dislay-mode"} {...others} />);
}

export default Component;
