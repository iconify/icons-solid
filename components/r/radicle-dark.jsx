import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwyel9bps.css';
import '../../css/v/vzf2kqbwe.css';
import '../../css/v/vyby-xbyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fwyel9bps"/><path class="vzf2kqbwe"/><path class="vyby-xbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radicle-dark"} {...others} />);
}

export default Component;
