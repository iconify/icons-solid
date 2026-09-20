import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv91ogb0a.css';
import '../../css/a/a8foytb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv91ogb0a"/><path class="a8foytb6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lightlink"} {...others} />);
}

export default Component;
