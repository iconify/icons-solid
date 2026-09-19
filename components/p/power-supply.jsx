import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u-60abcxg.css';
import '../../css/s/s_6tm9pjp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRv7X7dKS"><g class="aql7dnt-u"><path class="u-60abcxg"/><path class="s_6tm9pjp"/></g></mask></defs><path mask="url(#SVGRv7X7dKS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:power-supply"} {...others} />);
}

export default Component;
