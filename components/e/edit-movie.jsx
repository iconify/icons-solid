import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4mj_fbgb.css';
import '../../css/t/t7asixbbp.css';
import '../../css/f/fc-crnldr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0AnyqdZV"><g class="ft5dv1b6b"><path class="g4mj_fbgb"/><path class="t7asixbbp"/><path class="fc-crnldr"/></g></mask></defs><path mask="url(#SVG0AnyqdZV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:edit-movie"} {...others} />);
}

export default Component;
