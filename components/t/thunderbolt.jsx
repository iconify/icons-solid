import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z_-pg52ih.css';
import '../../css/h/huqu7zbyk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeTp9Id0Z"><g class="aql7dnt-u"><path class="z_-pg52ih"/><path class="huqu7zbyk"/></g></mask></defs><path mask="url(#SVGeTp9Id0Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:thunderbolt"} {...others} />);
}

export default Component;
