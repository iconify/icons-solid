import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok1m3edsi.css';
import '../../css/b/b7_h5qb_d.css';
import '../../css/e/ehlm3jw4n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ok1m3edsi"/><path class="b7_h5qb_d"/><path class="ehlm3jw4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compost-48"} {...others} />);
}

export default Component;
