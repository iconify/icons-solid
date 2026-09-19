import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-61rbjll.css';
import '../../css/l/lo95uel6m.css';

const viewBox = {"width":24,"height":24};
const content = `<ellipse class="e-61rbjll"/><path class="lo95uel6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:sushi"} {...others} />);
}

export default Component;
