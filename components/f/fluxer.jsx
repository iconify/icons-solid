import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5ryw4bkw.css';
import '../../css/s/s8bjcqbop.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w5ryw4bkw"/><path class="s8bjcqbop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fluxer"} {...others} />);
}

export default Component;
