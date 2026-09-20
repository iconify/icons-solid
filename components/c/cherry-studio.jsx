import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaahlrc3c.css';
import '../../css/a/aqdf5vb7x.css';
import '../../css/d/d43wkrl0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qaahlrc3c"/><path class="aqdf5vb7x"/><path class="d43wkrl0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cherry-studio"} {...others} />);
}

export default Component;
