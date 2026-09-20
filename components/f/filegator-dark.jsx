import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz-kgxbko.css';
import '../../css/b/bjzxtacce.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pz-kgxbko"/><path class="bjzxtacce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filegator-dark"} {...others} />);
}

export default Component;
