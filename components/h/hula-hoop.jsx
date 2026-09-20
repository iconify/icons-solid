import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-747lbuo.css';
import '../../css/s/s1egg1b2o.css';
import '../../css/t/t29japb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k-747lbuo"/><path class="s1egg1b2o"/><path class="t29japb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hula-hoop"} {...others} />);
}

export default Component;
