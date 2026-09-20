import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5qmmgbfo.css';
import '../../css/p/p-r-fqbmz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i5qmmgbfo"/><path class="p-r-fqbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-word-2000"} {...others} />);
}

export default Component;
