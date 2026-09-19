import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hm6futw9s.css';
import '../../css/h/hexer05rq.css';
import '../../css/u/u6a29ib_h.css';
import '../../css/y/yhpinr7sk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzPFmmcVH"><g class="ft5dv1b6b"><ellipse class="hm6futw9s"/><circle class="hexer05rq"/><path class="u6a29ib_h"/><path class="yhpinr7sk"/></g></mask></defs><path mask="url(#SVGzPFmmcVH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:golf-course"} {...others} />);
}

export default Component;
