import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5e43jbvj.css';
import '../../css/m/mtra8c3lj.css';
import '../../css/c/cgeyl2m5q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbAZnbbpM"><g class="ft5dv1b6b"><rect transform="rotate(45 35.193 5.322)" class="q5e43jbvj"/><path class="mtra8c3lj"/><rect transform="rotate(30 33.268 12.34)" class="cgeyl2m5q"/></g></mask></defs><path mask="url(#SVGbAZnbbpM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:electronic-pen"} {...others} />);
}

export default Component;
