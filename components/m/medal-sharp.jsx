import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjy_8-bky.css';
import '../../css/y/yehn7qb3c.css';
import '../../css/x/xfs19bcvf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gjy_8-bky"/><path class="yehn7qb3c"/><circle class="xfs19bcvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:medal-sharp"} {...others} />);
}

export default Component;
