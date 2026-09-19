import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/clv75subd.css';
import '../../css/d/d_63unb4q.css';
import '../../css/q/qumoe9brk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiEVe8diH"><g class="s9cl3zbei"><path class="clv75subd"/><path class="d_63unb4q"/><path class="qumoe9brk"/></g></mask></defs><path mask="url(#SVGiEVe8diH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:intercom"} {...others} />);
}

export default Component;
