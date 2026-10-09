import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcj6n3sgd.css';
import '../../css/f/f2--itp1s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xcj6n3sgd"/><path class="f2--itp1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-pack-48-bold"} {...others} />);
}

export default Component;
