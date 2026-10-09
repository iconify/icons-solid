import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2o5wdb0f.css';
import '../../css/g/gbgl6tbjc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u2o5wdb0f"/><path class="gbgl6tbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:history-48-bold"} {...others} />);
}

export default Component;
