import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/sfp7mw5ut.css';
import '../../css/v/v3q5wob3k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVlwHzcpJ"><g class="ylrso7y3c"><path class="sfp7mw5ut"/><path class="v3q5wob3k"/></g></mask></defs><path mask="url(#SVGVlwHzcpJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:setting"} {...others} />);
}

export default Component;
