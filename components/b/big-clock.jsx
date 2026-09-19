import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/io1qadzfc.css';
import '../../css/d/d59gqabzx.css';
import '../../css/t/trq0gv3dc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMLsYnb9M"><g class="wwvp95byt"><path class="io1qadzfc"/><circle class="d59gqabzx"/><path class="trq0gv3dc"/></g></mask></defs><path mask="url(#SVGMLsYnb9M)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:big-clock"} {...others} />);
}

export default Component;
