import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr-s73b2l.css';
import '../../css/z/z82ok8llb.css';
import '../../css/c/c_6h8cous.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr-s73b2l"/><path class="z82ok8llb"/><path class="c_6h8cous"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bdt"} {...others} />);
}

export default Component;
