import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/org_7jb0n.css';
import '../../css/h/h3at2v6ox.css';
import '../../css/k/k374v1b5s.css';
import '../../css/r/r9abw96ko.css';
import '../../css/f/fb86pfnco.css';
import '../../css/r/r6ssi6nrw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="org_7jb0n"><path class="h3at2v6ox"/><circle class="k374v1b5s"/></g><path class="r9abw96ko"/><circle class="fb86pfnco"/><path class="r6ssi6nrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:search"} {...others} />);
}

export default Component;
