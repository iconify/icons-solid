import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hvqy7zb2s.css';
import '../../css/f/fnvwt9cpi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXs9sYcjz"><g class="ufeehvblu"><path class="hvqy7zb2s"/><path class="fnvwt9cpi"/></g></mask></defs><path mask="url(#SVGXs9sYcjz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tag"} {...others} />);
}

export default Component;
