import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/vho2rjtrw.css';
import '../../css/m/m-ojbcwmy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzNw0cdOJ"><g class="v3_i3wktz"><rect class="vho2rjtrw"/><path class="m-ojbcwmy"/></g></mask></defs><path mask="url(#SVGzNw0cdOJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shopping-bag-one"} {...others} />);
}

export default Component;
