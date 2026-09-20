import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c4vs9rbaq.css';
import '../../css/i/i9auyexvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c4vs9rbaq"/><path class="i9auyexvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-banknote-edit"} {...others} />);
}

export default Component;
