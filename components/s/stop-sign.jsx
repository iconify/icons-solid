import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egapqxbpj.css';
import '../../css/u/ulx9yvgaq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="egapqxbpj"/><path class="ulx9yvgaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:stop-sign"} {...others} />);
}

export default Component;
