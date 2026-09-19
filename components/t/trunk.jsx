import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oc1spnb4j.css';
import '../../css/y/y1_alg6mo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxGKFOeVC"><g class="aql7dnt-u"><rect class="oc1spnb4j"/><path class="y1_alg6mo"/></g></mask></defs><path mask="url(#SVGxGKFOeVC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:trunk"} {...others} />);
}

export default Component;
