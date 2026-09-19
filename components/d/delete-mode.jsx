import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr87l5bdb.css';
import '../../css/y/ymshcybtb.css';
import '../../css/n/na-18cbwr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZhn2ecEq"><g class="lr87l5bdb"><path class="ymshcybtb"/><path class="na-18cbwr"/></g></mask></defs><path mask="url(#SVGZhn2ecEq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:delete-mode"} {...others} />);
}

export default Component;
