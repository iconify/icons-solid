import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv91ufroz.css';
import '../../css/y/y4teju86f.css';
import '../../css/k/kmncaq-ru.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kv91ufroz"/><path class="y4teju86f"/><path class="kmncaq-ru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:freezing-rain-48"} {...others} />);
}

export default Component;
