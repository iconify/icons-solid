import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/z/zpwt154-d.css';
import '../../css/q/q816jkbgd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6otsLb9B"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="zpwt154-d"/><path class="q816jkbgd"/></g></mask></defs><path mask="url(#SVG6otsLb9B)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:video-file"} {...others} />);
}

export default Component;
