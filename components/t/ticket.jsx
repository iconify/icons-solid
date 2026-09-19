import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/u/uqscuj1nf.css';
import '../../css/q/qj0noo85w.css';
import '../../css/j/jv3no3wus.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2zJZFeEW"><g class="gopnm44um"><path class="uqscuj1nf"/><path class="qj0noo85w"/><path class="jv3no3wus"/></g></mask></defs><path mask="url(#SVG2zJZFeEW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ticket"} {...others} />);
}

export default Component;
