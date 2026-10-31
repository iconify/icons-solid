import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/m/m90b07a8p.css';
import '../../css/j/jm4p79bio.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="m90b07a8p"/><path class="jm4p79bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:georgia"} {...others} />);
}

export default Component;
