import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ooefdb7zl.css';
import '../../css/j/jasl4d3jm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6gpXUYuA"><g class="aql7dnt-u"><path class="ooefdb7zl"/><path class="jasl4d3jm"/></g></mask></defs><path mask="url(#SVG6gpXUYuA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:banana"} {...others} />);
}

export default Component;
