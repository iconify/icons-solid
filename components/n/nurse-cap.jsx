import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ouv68p9fq.css';
import '../../css/a/a4t4jwbbp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfklC0HOU"><g class="aql7dnt-u"><path class="ouv68p9fq"/><path class="a4t4jwbbp"/></g></mask></defs><path mask="url(#SVGfklC0HOU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:nurse-cap"} {...others} />);
}

export default Component;
