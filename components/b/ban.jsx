import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/v7wgu5b8y.css';
import '../../css/z/z5e9i4bvb.css';
import '../../css/t/tz77pgb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="v7wgu5b8y wm-shadow"/><path class="z5e9i4bvb"/><path class="tz77pgb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:ban"} {...others} />);
}

export default Component;
