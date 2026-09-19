import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/givycqbte.css';
import '../../css/q/qi9ru7mur.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="givycqbte"/><path class="qi9ru7mur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-git-compare"} {...others} />);
}

export default Component;
