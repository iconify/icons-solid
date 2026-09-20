import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngzf6uboz.css';
import '../../css/g/gz_bv4anf.css';
import '../../css/l/l7s2asbza.css';
import '../../css/z/zni7kfb5s.css';
import '../../css/s/s3jg0ac1t.css';
import '../../css/u/uyv7q0kyy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ngzf6uboz"/><path class="gz_bv4anf"/><path class="l7s2asbza"/><path class="zni7kfb5s"/><path class="s3jg0ac1t"/><path class="uyv7q0kyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:school"} {...others} />);
}

export default Component;
