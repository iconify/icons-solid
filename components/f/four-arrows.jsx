import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uj5tubcvw.css';
import '../../css/r/rivlizb9k.css';
import '../../css/q/qsirhpcjy.css';
import '../../css/o/ob_he3pam.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtRUZDbUm"><g class="aql7dnt-u"><path class="uj5tubcvw"/><path class="rivlizb9k"/><path class="qsirhpcjy"/><path class="ob_he3pam"/></g></mask></defs><path mask="url(#SVGtRUZDbUm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:four-arrows"} {...others} />);
}

export default Component;
