import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glewgqbdp.css';
import '../../css/d/d9dba9b9q.css';
import '../../css/h/hs60lhboe.css';
import '../../css/d/depdzl0up.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="glewgqbdp"/><path class="d9dba9b9q"/><path class="hs60lhboe"/><path class="depdzl0up"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:qodo"} {...others} />);
}

export default Component;
