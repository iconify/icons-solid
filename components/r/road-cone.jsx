import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy0k7rbbq.css';
import '../../css/b/bqbzmxglo.css';
import '../../css/s/sdpmrcc2s.css';
import '../../css/c/c7ocmjbun.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgZozgdiX"><g class="ft5dv1b6b"><path class="gy0k7rbbq"/><path class="bqbzmxglo"/><path class="sdpmrcc2s"/><path class="c7ocmjbun"/></g></mask></defs><path mask="url(#SVGgZozgdiX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:road-cone"} {...others} />);
}

export default Component;
