import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1tj-6k9k.css';
import '../../css/k/kid2eibph.css';
import '../../css/n/n9b7sac4s.css';
import '../../css/r/r99qjyjuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g1tj-6k9k"/><path class="kid2eibph"/><path class="n9b7sac4s"/><path class="r99qjyjuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rocking-horse"} {...others} />);
}

export default Component;
