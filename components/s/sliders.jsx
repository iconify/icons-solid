import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qv35mhr5v.css';
import '../../css/h/ho8lzkf2o.css';
import '../../css/c/cowgu0bvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qv35mhr5v wm-shadow"/><path class="ho8lzkf2o wm-shadow"/><path class="cowgu0bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sliders"} {...others} />);
}

export default Component;
