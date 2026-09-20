import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iy3ab66ne.css';
import '../../css/o/oeljw3b-k.css';
import '../../css/a/aec8oobvu.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iy3ab66ne"/><circle transform="rotate(45 17.657 6.343)" class="oeljw3b-k"/><circle transform="rotate(45 6.343 17.657)" class="aec8oobvu"/><circle transform="rotate(45 12 12)" class="n1xy6nh9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:atom-2"} {...others} />);
}

export default Component;
