import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgf29cc2c.css';
import '../../css/s/s8or9-btt.css';
import '../../css/s/s-cwl4b5f.css';
import '../../css/w/wo82rkbss.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bgf29cc2c"/><path class="s8or9-btt"/><path class="s-cwl4b5f"/><path class="wo82rkbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:redis-light"} {...others} />);
}

export default Component;
