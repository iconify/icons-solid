import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moyoz5fkv.css';
import '../../css/e/e54qfbcyw.css';
import '../../css/o/ol4lf3bik.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="moyoz5fkv"/><path class="e54qfbcyw"/><path class="ol4lf3bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tyre-48-bold"} {...others} />);
}

export default Component;
