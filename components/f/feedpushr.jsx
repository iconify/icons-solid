import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee3_s121s.css';
import '../../css/x/xyl9rzbno.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ee3_s121s"/><path class="xyl9rzbno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:feedpushr"} {...others} />);
}

export default Component;
