import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snwtadbgg.css';
import '../../css/a/az_2yey3j.css';
import '../../css/p/prhm6ub7u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="snwtadbgg"/><path class="az_2yey3j"/><path class="prhm6ub7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:leftwards-pushing-hand-light"} {...others} />);
}

export default Component;
