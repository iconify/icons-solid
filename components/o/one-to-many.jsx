import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m4jss5ybp.css';
import '../../css/u/urj19wz9n.css';
import '../../css/k/k9zewywgp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSQJqBKGw"><g class="s9cl3zbei"><path class="m4jss5ybp"/><path class="urj19wz9n"/><path class="k9zewywgp"/></g></mask></defs><path mask="url(#SVGSQJqBKGw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:one-to-many"} {...others} />);
}

export default Component;
