import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7wym1brq.css';
import '../../css/e/eij_89ifm.css';
import '../../css/v/vfp_emomb.css';

const viewBox = {"width":504,"height":504};
const content = `<path class="b7wym1brq"/><path class="eij_89ifm"/><path class="vfp_emomb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bamboo-airways"} {...others} />);
}

export default Component;
