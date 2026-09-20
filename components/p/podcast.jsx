import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-gsambcb.css';
import '../../css/q/qnn9vyb6a.css';
import '../../css/a/aej6_67ns.css';
import '../../css/c/c7gfsbb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r-gsambcb"/><path class="qnn9vyb6a"/><path class="aej6_67ns"/><circle class="c7gfsbb7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:podcast"} {...others} />);
}

export default Component;
