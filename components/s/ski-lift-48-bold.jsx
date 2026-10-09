import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwvj6mb8y.css';
import '../../css/n/nb5248_8r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gwvj6mb8y"/><path class="nb5248_8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ski-lift-48-bold"} {...others} />);
}

export default Component;
