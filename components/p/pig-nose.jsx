import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iw6r675bo.css';
import '../../css/k/kh_b6bnaw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="iw6r675bo"/><path class="kh_b6bnaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pig-nose"} {...others} />);
}

export default Component;
