import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsu-6cu0h.css';
import '../../css/a/ao3chnvww.css';
import '../../css/h/hgxfgonkw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tsu-6cu0h"/><path class="ao3chnvww"/><path class="hgxfgonkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vagrant-wordmark"} {...others} />);
}

export default Component;
