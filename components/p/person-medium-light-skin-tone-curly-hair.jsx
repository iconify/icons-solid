import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezh4jmbyp.css';
import '../../css/x/xu21rsb_f.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l4css97ah.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';
import '../../css/z/zyfl6vbby.css';
import '../../css/d/dimxmhv3l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ezh4jmbyp"/><path class="xu21rsb_f"/><path class="amn_b-_3e"/><path class="l4css97ah"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/><path class="zyfl6vbby"/><path class="dimxmhv3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-medium-light-skin-tone-curly-hair"} {...others} />);
}

export default Component;
