import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6zdbdb4h.css';
import '../../css/p/ptcyaub2w.css';
import '../../css/c/cfa9k9bhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h6zdbdb4h"/><rect class="ptcyaub2w"/><path class="cfa9k9bhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bus-front"} {...others} />);
}

export default Component;
