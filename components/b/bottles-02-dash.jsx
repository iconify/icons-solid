import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htbh933pt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="htbh933pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bottles-02-dash"} {...others} />);
}

export default Component;
