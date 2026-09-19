import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qblb5vb-h.css';
import '../../css/k/ksfo9sa3u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhgbF1H4Z"><g class="aql7dnt-u"><path class="qblb5vb-h"/><path class="ksfo9sa3u"/></g></mask></defs><path mask="url(#SVGhgbF1H4Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:car-battery"} {...others} />);
}

export default Component;
