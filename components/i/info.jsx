import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rimzogy_d.css';
import '../../css/x/xkpcfdb4u.css';
import '../../css/h/hasg0ee8z.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="rimzogy_d"/><path class="xkpcfdb4u"/><circle class="hasg0ee8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:info"} {...others} />);
}

export default Component;
