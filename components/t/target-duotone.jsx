import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5oqn8unq.css';
import '../../css/b/bb6-6oplo.css';
import '../../css/h/hex7kcqxe.css';
import '../../css/e/ehsr83pwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v5oqn8unq"/><path class="bb6-6oplo"/><path class="hex7kcqxe"/><path class="ehsr83pwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:target-duotone"} {...others} />);
}

export default Component;
