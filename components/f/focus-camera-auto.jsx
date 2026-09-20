import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/we9b9_p-a.css';
import '../../css/q/qzzo5nbdd.css';
import '../../css/x/xcrrugbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="we9b9_p-a"/><path class="qzzo5nbdd"/><path class="xcrrugbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:focus-camera-auto"} {...others} />);
}

export default Component;
