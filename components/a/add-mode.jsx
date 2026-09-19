import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr87l5bdb.css';
import '../../css/y/ymshcybtb.css';
import '../../css/i/i-lm01b3y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGitgYkEpi"><g class="lr87l5bdb"><path class="ymshcybtb"/><path class="i-lm01b3y"/></g></mask></defs><path mask="url(#SVGitgYkEpi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:add-mode"} {...others} />);
}

export default Component;
