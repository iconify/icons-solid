import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/q/q9lz45bgk.css';
import '../../css/f/f4tcrjb5t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwO3CBc8U"><g class="rohhhzb0l"><path class="rjn-u5bcv"/><circle class="q9lz45bgk"/><path class="f4tcrjb5t"/></g></mask></defs><path mask="url(#SVGwO3CBc8U)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-settings-one"} {...others} />);
}

export default Component;
