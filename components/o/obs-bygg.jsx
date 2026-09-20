import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jywu-rbdx.css';
import '../../css/h/hppnn5bly.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jywu-rbdx"/><path class="hppnn5bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:obs-bygg"} {...others} />);
}

export default Component;
