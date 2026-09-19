import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tbsa7mbvm.css';
import '../../css/c/c9o6rtblp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4gwxNddI"><g class="aql7dnt-u"><path class="tbsa7mbvm"/><path class="c9o6rtblp"/></g></mask></defs><path mask="url(#SVG4gwxNddI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:xiaodu"} {...others} />);
}

export default Component;
