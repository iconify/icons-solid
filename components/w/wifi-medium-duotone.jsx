import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3zl9abjg.css';
import '../../css/e/ee25ukb3h.css';
import '../../css/c/chh9m8bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e3zl9abjg"/><path class="ee25ukb3h"/><path class="chh9m8bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wifi-medium-duotone"} {...others} />);
}

export default Component;
