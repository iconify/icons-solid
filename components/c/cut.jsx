import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqc1mzcmu.css';
import '../../css/q/q2cblpihb.css';
import '../../css/b/brfj9ob1j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cqc1mzcmu"/><path class="q2cblpihb"/><path class="brfj9ob1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:cut"} {...others} />);
}

export default Component;
