import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mabwzbbvc.css';
import '../../css/a/aris89b7q.css';
import '../../css/z/zwst-wbqw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mabwzbbvc"/><circle class="aris89b7q"/><path class="zwst-wbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:question-circle"} {...others} />);
}

export default Component;
