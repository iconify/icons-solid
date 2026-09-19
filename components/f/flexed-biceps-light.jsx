import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acawn2bij.css';
import '../../css/y/yyg7w0bby.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="acawn2bij"/><path class="yyg7w0bby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:flexed-biceps-light"} {...others} />);
}

export default Component;
