import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u21y36n3m.css';
import '../../css/q/qtj8v8b9i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u21y36n3m"/><circle class="qtj8v8b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:bold-arab-jeem"} {...others} />);
}

export default Component;
