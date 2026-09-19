import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4g9c6bca.css';
import '../../css/b/b2rjfubut.css';
import '../../css/r/rod9hkbdu.css';
import '../../css/v/vzudknd9f.css';
import '../../css/r/rlachkb9o.css';
import '../../css/d/d566cfb7x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9ncfDdJF"><g class="ft5dv1b6b"><path class="c4g9c6bca"/><ellipse class="b2rjfubut"/><circle class="rod9hkbdu"/><circle class="vzudknd9f"/><circle class="rlachkb9o"/><circle class="d566cfb7x"/></g></mask></defs><path mask="url(#SVG9ncfDdJF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pig"} {...others} />);
}

export default Component;
