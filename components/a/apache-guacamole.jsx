import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iycln-b8i.css';
import '../../css/u/ubauqy9wp.css';
import '../../css/c/cudjf8a_r.css';
import '../../css/z/zdzon5lta.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="iycln-b8i"/><path class="ubauqy9wp"/><path class="cudjf8a_r"/><path class="zdzon5lta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apache-guacamole"} {...others} />);
}

export default Component;
