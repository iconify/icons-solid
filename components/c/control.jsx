import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nsqnp5fhf.css';
import '../../css/v/vimy9t0cn.css';
import '../../css/i/i-tcsr9te.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGq7EWHbwl"><g class="rohhhzb0l"><rect class="nsqnp5fhf"/><circle class="vimy9t0cn"/><path class="i-tcsr9te"/></g></mask></defs><path mask="url(#SVGq7EWHbwl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:control"} {...others} />);
}

export default Component;
