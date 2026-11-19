import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt0fkoxbg.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/g/g76-4kbhs.css';
import '../../css/a/ak1tbub4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yt0fkoxbg"/><path class="gsvrl7yuk"/><path class="g76-4kbhs"/><path class="ak1tbub4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-droplet"} {...others} />);
}

export default Component;
