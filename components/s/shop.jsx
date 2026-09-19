import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u12oc-1ez.css';
import '../../css/x/x0yq8fapu.css';
import '../../css/w/wf6zkcc8o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJq9qkcCg"><g class="aql7dnt-u"><path class="u12oc-1ez"/><path class="x0yq8fapu"/><path class="wf6zkcc8o"/></g></mask></defs><path mask="url(#SVGJq9qkcCg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shop"} {...others} />);
}

export default Component;
