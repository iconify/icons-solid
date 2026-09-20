import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fowq36bhd.css';
import '../../css/u/un3nlpbjl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fowq36bhd"/><path class="un3nlpbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:epic-games"} {...others} />);
}

export default Component;
