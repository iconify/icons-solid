import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni793ccca.css';
import '../../css/g/guwubbb0i.css';
import '../../css/u/u13jj0bme.css';
import '../../css/a/acb48hb4h.css';
import '../../css/n/nsdsf4nsf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ni793ccca"/><path clip-rule="evenodd" class="guwubbb0i"/><path class="u13jj0bme"/><path class="acb48hb4h"/><path class="nsdsf4nsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-list-5"} {...others} />);
}

export default Component;
