import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qywweimyl.css';
import '../../css/p/p-h1svb7w.css';
import '../../css/k/kkftzqzny.css';
import '../../css/l/lijdjv4wn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQEbOccRQ"><g class="ft5dv1b6b"><path class="qywweimyl"/><path class="p-h1svb7w"/><path class="kkftzqzny"/><path class="lijdjv4wn"/></g></mask></defs><path mask="url(#SVGQEbOccRQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:play-basketball"} {...others} />);
}

export default Component;
