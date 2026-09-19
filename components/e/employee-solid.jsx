import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etq8ynb_q.css';
import '../../css/u/umdk-bb1p.css';
import '../../css/x/xycuzbc4v.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="etq8ynb_q"/><path class="umdk-bb1p"/><path class="xycuzbc4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:employee-solid"} {...others} />);
}

export default Component;
