import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r095fdb0a.css';
import '../../css/s/sgkeqm1ah.css';
import '../../css/r/ruj0ehbjh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r095fdb0a"/><path class="sgkeqm1ah"/><path class="ruj0ehbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:copy"} {...others} />);
}

export default Component;
