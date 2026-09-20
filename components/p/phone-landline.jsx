import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0v05y64m.css';
import '../../css/a/adgg27x9x.css';
import '../../css/t/t3url24-k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r0v05y64m"/><path class="adgg27x9x"/><path class="t3url24-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:phone-landline"} {...others} />);
}

export default Component;
