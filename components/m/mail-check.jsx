import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e26ul7b2m.css';
import '../../css/a/a4qsyxrvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e26ul7b2m"/><path class="a4qsyxrvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-check"} {...others} />);
}

export default Component;
