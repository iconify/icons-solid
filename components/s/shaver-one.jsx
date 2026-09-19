import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yhw77yb8y.css';
import '../../css/g/gwrmm3xbs.css';
import '../../css/f/ft6udiq_a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIGq8LeRj"><g class="aql7dnt-u"><path class="yhw77yb8y"/><path class="gwrmm3xbs"/><circle class="ft6udiq_a"/></g></mask></defs><path mask="url(#SVGIGq8LeRj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shaver-one"} {...others} />);
}

export default Component;
