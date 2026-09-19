import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9j729b5e.css';
import '../../css/p/pquij9buq.css';
import '../../css/i/im78o1b2i.css';
import '../../css/u/u1sf77b5l.css';
import '../../css/w/wvr0qu80c.css';
import '../../css/o/o8uzwvv9d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m9j729b5e"/><path class="pquij9buq"/><path class="im78o1b2i"/><g><path class="u1sf77b5l"/></g><path class="wvr0qu80c"/><path class="o8uzwvv9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-android-outline"} {...others} />);
}

export default Component;
