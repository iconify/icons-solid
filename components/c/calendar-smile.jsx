import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8aor9bgf.css';
import '../../css/e/eexpr1olo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x8aor9bgf"/><path class="eexpr1olo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calendar-smile"} {...others} />);
}

export default Component;
