import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbqftdbeg.css';
import '../../css/u/ubw4zvora.css';
import '../../css/v/vlrj8tq8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gbqftdbeg"/><path class="ubw4zvora"/><path class="vlrj8tq8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:server-sftp-folder"} {...others} />);
}

export default Component;
