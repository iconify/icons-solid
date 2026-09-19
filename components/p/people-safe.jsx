import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/ccbbnd11y.css';
import '../../css/m/meg_-wbqb.css';
import '../../css/y/ybmshrj6v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnEk6WccL"><g class="v3_i3wktz"><path class="ccbbnd11y"/><circle class="meg_-wbqb"/><path class="ybmshrj6v"/></g></mask></defs><path mask="url(#SVGnEk6WccL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-safe"} {...others} />);
}

export default Component;
