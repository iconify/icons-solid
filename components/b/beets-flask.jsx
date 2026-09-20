import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5h6soc8c.css';
import '../../css/n/n3kfhe2ac.css';
import '../../css/k/kpj5l1brl.css';
import '../../css/z/z2ozr-6hj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c5h6soc8c"/><path class="n3kfhe2ac"/><path class="kpj5l1brl"/><path class="z2ozr-6hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beets-flask"} {...others} />);
}

export default Component;
