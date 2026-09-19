import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9e24_oox.css';
import '../../css/t/t6jk6wh7q.css';
import '../../css/i/ijjc0f5ho.css';
import '../../css/r/r3toub72m.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="n9e24_oox"/><path class="t6jk6wh7q"/><path class="ijjc0f5ho"/><circle class="r3toub72m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:people-sharp"} {...others} />);
}

export default Component;
