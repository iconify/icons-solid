import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyezo-ikf.css';
import '../../css/h/hw02_8bnp.css';
import '../../css/d/d978pz0hn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vyezo-ikf"/><path class="hw02_8bnp"/><path class="d978pz0hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:instradaogm-light"} {...others} />);
}

export default Component;
