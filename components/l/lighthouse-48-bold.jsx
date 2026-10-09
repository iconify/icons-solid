import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rquh9bckn.css';
import '../../css/z/zembkqbot.css';
import '../../css/o/ok1e7zbnq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rquh9bckn"/><path class="zembkqbot"/><path class="ok1e7zbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lighthouse-48-bold"} {...others} />);
}

export default Component;
