import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g10yrmh8a.css';
import '../../css/r/rs61gez4m.css';
import '../../css/w/wn6nkdbfm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="g10yrmh8a"/><path class="rs61gez4m"/><path class="wn6nkdbfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:foot-medium-dark"} {...others} />);
}

export default Component;
