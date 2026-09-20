import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fah12mbgy.css';
import '../../css/b/bd64llb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fah12mbgy"/><path class="bd64llb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:reorder"} {...others} />);
}

export default Component;
