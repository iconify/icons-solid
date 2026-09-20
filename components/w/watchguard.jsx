import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdl0eybov.css';
import '../../css/z/z1aoycclw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jdl0eybov"/><path class="z1aoycclw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:watchguard"} {...others} />);
}

export default Component;
