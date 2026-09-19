import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mpz_0zach.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYDbtOuNw"><g class="v3_i3wktz"><path class="mpz_0zach"/><path class="j9hg1or3h"/></g></mask></defs><path mask="url(#SVGYDbtOuNw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tower"} {...others} />);
}

export default Component;
