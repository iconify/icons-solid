import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adzm42zuk.css';
import '../../css/s/s8ope8btg.css';
import '../../css/p/pp0f03bez.css';
import '../../css/q/q8h4qbb9h.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="adzm42zuk"/><path class="s8ope8btg"/><path class="pp0f03bez"/><path class="q8h4qbb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nasa"} {...others} />);
}

export default Component;
