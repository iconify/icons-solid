import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afeo2fbqa.css';
import '../../css/z/zu2drkjtb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGdCBlela"><g class="ft5dv1b6b"><path class="afeo2fbqa"/><path class="zu2drkjtb"/></g></mask></defs><path mask="url(#SVGGdCBlela)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tumblr"} {...others} />);
}

export default Component;
