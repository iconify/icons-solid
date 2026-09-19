import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/w812kkozp.css';
import '../../css/d/d1ny5kbfu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUV14vb0V"><g class="aql7dnt-u"><path class="w812kkozp"/><path class="d1ny5kbfu"/></g></mask></defs><path mask="url(#SVGUV14vb0V)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pay-code-one"} {...others} />);
}

export default Component;
