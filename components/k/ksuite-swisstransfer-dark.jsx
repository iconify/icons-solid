import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhlkhxbii.css';
import '../../css/b/bp4av50wq.css';
import '../../css/s/soawemmgw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yhlkhxbii"/><path class="bp4av50wq"/><path class="soawemmgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-swisstransfer-dark"} {...others} />);
}

export default Component;
