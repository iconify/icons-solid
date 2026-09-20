import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqlk6jbjw.css';
import '../../css/c/cwmhkgfct.css';
import '../../css/k/k1v72ui6e.css';
import '../../css/m/mg0w4tf1u.css';
import '../../css/g/g62vtlbka.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oqlk6jbjw"/><path class="cwmhkgfct"/><path class="k1v72ui6e"/><path class="mg0w4tf1u"/><path class="g62vtlbka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hister"} {...others} />);
}

export default Component;
