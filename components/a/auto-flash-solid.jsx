import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg-zqtbkr.css';
import '../../css/l/lpmi47w6s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hg-zqtbkr"/><path clip-rule="evenodd" class="lpmi47w6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:auto-flash-solid"} {...others} />);
}

export default Component;
