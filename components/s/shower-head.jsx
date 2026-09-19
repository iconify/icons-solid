import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jpzgdqbjk.css';
import '../../css/o/opxuyt77v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlFDUzbMk"><g class="aql7dnt-u"><path class="jpzgdqbjk"/><path class="opxuyt77v"/></g></mask></defs><path mask="url(#SVGlFDUzbMk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shower-head"} {...others} />);
}

export default Component;
