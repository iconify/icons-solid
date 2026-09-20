import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6b6vpb5x.css';
import '../../css/u/uu-fcqbzw.css';
import '../../css/x/xztz0wb3p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b6b6vpb5x"/><path class="uu-fcqbzw"/><path class="xztz0wb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pastefy-light"} {...others} />);
}

export default Component;
