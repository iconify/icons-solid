import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu7kjxbfo.css';
import '../../css/q/qd4pbdbtk.css';
import '../../css/x/xa6j1ffcg.css';
import '../../css/p/pken44v3y.css';
import '../../css/l/l7-2div4f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpbQu5c1X"><g class="ft5dv1b6b"><ellipse class="bu7kjxbfo"/><circle class="qd4pbdbtk"/><circle class="xa6j1ffcg"/><circle class="pken44v3y"/><path class="l7-2div4f"/></g></mask></defs><path mask="url(#SVGpbQu5c1X)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rabbit"} {...others} />);
}

export default Component;
