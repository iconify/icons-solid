import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f694ycdso.css';
import '../../css/w/wtg9n8boz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjL7PiedM"><g class="aql7dnt-u"><path class="f694ycdso"/><path class="wtg9n8boz"/></g></mask></defs><path mask="url(#SVGjL7PiedM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gift-box"} {...others} />);
}

export default Component;
