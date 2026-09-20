import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh0rf-b9f.css';
import '../../css/b/b54wsupbd.css';
import '../../css/t/trippqbss.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kh0rf-b9f"/><path class="b54wsupbd"/><path class="trippqbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:codeproject-ai-server"} {...others} />);
}

export default Component;
