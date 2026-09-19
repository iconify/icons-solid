import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/x6knv9d5h.css';
import '../../css/h/ht5gvjbvi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhet3wbJU"><g class="aql7dnt-u"><path class="x6knv9d5h"/><circle class="ht5gvjbvi"/></g></mask></defs><path mask="url(#SVGhet3wbJU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clothes-skates"} {...others} />);
}

export default Component;
