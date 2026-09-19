import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/s/stmzisb6i.css';
import '../../css/q/qpg8htbdf.css';
import '../../css/h/h18esy_qw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpsVvjdWi"><g class="gopnm44um"><path class="stmzisb6i"/><path class="qpg8htbdf"/><path class="h18esy_qw"/></g></mask></defs><path mask="url(#SVGpsVvjdWi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:add-print"} {...others} />);
}

export default Component;
