import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oaovvsb9w.css';
import '../../css/d/dgx97y8eg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oaovvsb9w"/><path class="dgx97y8eg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-banknote-pin"} {...others} />);
}

export default Component;
