import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o8x38jbfa.css';
import '../../css/w/wby2aacyu.css';
import '../../css/c/czqpd_v7c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjWfJybeB"><g class="aql7dnt-u"><path class="o8x38jbfa"/><circle class="wby2aacyu"/><path class="czqpd_v7c"/></g></mask></defs><path mask="url(#SVGjWfJybeB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-bottom-card"} {...others} />);
}

export default Component;
