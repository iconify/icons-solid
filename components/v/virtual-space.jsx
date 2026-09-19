import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckr9kb1z.css';
import '../../css/x/xhc6meu_c.css';
import '../../css/a/azz2-zbpr.css';
import '../../css/w/weswpdbxi.css';
import '../../css/d/dnxlfvbnp.css';
import '../../css/e/efivp5tbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wckr9kb1z"/><circle class="xhc6meu_c"/><circle class="azz2-zbpr"/><circle class="weswpdbxi"/><circle class="dnxlfvbnp"/><circle class="efivp5tbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:virtual-space"} {...others} />);
}

export default Component;
