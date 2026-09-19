import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc9fbbc8y.css';
import '../../css/c/ct4zdj6ou.css';
import '../../css/d/dpk0gib0u.css';
import '../../css/e/eogmyrb4k.css';
import '../../css/p/p8t5a4xkl.css';
import '../../css/o/o016sgb4j.css';
import '../../css/q/qxl0vzldb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nc9fbbc8y"/><path class="ct4zdj6ou"/><path class="dpk0gib0u"/><path class="eogmyrb4k"/><path class="p8t5a4xkl"/><path class="o016sgb4j"/><path class="qxl0vzldb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:schoolsatchel"} {...others} />);
}

export default Component;
