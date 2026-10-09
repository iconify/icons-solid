import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvjwhfbog.css';
import '../../css/b/bxn05tnng.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rvjwhfbog"/><path class="bxn05tnng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-data-48"} {...others} />);
}

export default Component;
