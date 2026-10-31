import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g9qe22bnk.css';
import '../../css/z/zizwbwb-u.css';
import '../../css/e/ebnucmg7y.css';
import '../../css/a/aexuozm6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="g9qe22bnk wm-shadow"/><path class="wm-shadow zizwbwb-u"/><path class="ebnucmg7y"/><path class="aexuozm6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:donut"} {...others} />);
}

export default Component;
