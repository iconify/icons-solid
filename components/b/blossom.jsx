import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/ec0gfvblp.css';
import '../../css/d/dmn38-04c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh5btNbUu"><g class="wwvp95byt"><path class="ec0gfvblp"/><path class="dmn38-04c"/></g></mask></defs><path mask="url(#SVGh5btNbUu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:blossom"} {...others} />);
}

export default Component;
