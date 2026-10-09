import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x673fkv0u.css';
import '../../css/g/ghqak4bvs.css';
import '../../css/e/ec0d-j14t.css';
import '../../css/d/dg7d3thnd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x673fkv0u"/><path class="ghqak4bvs"/><path class="ec0d-j14t"/><path class="dg7d3thnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-bike-48-bold"} {...others} />);
}

export default Component;
