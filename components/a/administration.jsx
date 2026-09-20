import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi-0iegqa.css';
import '../../css/o/o-nkwpb0q.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="mi-0iegqa"/><path class="o-nkwpb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:administration"} {...others} />);
}

export default Component;
