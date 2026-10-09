import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw05wmbvu.css';
import '../../css/x/xncsss79o.css';
import '../../css/f/fxs4l-b8z.css';
import '../../css/l/l3s05dbra.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kw05wmbvu"/><path class="xncsss79o"/><path class="fxs4l-b8z"/><path class="l3s05dbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snowflake-48-bold"} {...others} />);
}

export default Component;
