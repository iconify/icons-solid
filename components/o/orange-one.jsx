import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rxf7n0b4j.css';
import '../../css/a/a5u-aqbta.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpxrZpcpf"><g class="aql7dnt-u"><path class="rxf7n0b4j"/><path class="a5u-aqbta"/></g></mask></defs><path mask="url(#SVGpxrZpcpf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:orange-one"} {...others} />);
}

export default Component;
