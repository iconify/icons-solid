import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/l/lx7mkia0m.css';
import '../../css/o/oirwttbcl.css';
import '../../css/o/o5pp98bzx.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><path class="lx7mkia0m"/><path class="oirwttbcl"/><path class="o5pp98bzx"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-djibouti"} {...others} />);
}

export default Component;
