import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/y/y83q4pbpd.css';
import '../../css/x/x3aeq5y9b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzYdUId2F"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="y83q4pbpd"/><path class="x3aeq5y9b"/></g></mask></defs><path mask="url(#SVGzYdUId2F)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:right-bar"} {...others} />);
}

export default Component;
