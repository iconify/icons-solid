import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu6jtuk4j.css';
import '../../css/w/wk-ulfo7h.css';
import '../../css/b/barxdr7sk.css';
import '../../css/y/yyjfcnuud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tu6jtuk4j"/><path class="wk-ulfo7h"/><path class="barxdr7sk"/><path class="yyjfcnuud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hbot"} {...others} />);
}

export default Component;
