import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gm-93bv_a.css';
import '../../css/v/v-b7n9c7y.css';
import '../../css/e/eatbgsbzl.css';
import '../../css/q/qflgksbxq.css';
import '../../css/a/a0o7rv5lg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gm-93bv_a"/><path clip-rule="evenodd" class="v-b7n9c7y"/><path class="eatbgsbzl"/><path class="qflgksbxq"/><path clip-rule="evenodd" class="a0o7rv5lg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:crown"} {...others} />);
}

export default Component;
