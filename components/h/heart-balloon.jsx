import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5swbqbnt.css';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/ypw0jwb6v.css';
import '../../css/b/bsdzavxjo.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGnXmmVAQw" class="y5swbqbnt"/></defs><g class="l3xtuk_0z"><path class="ypw0jwb6v"/><path class="bsdzavxjo"/><use href="#SVGnXmmVAQw"/><use href="#SVGnXmmVAQw"/><use href="#SVGnXmmVAQw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:heart-balloon"} {...others} />);
}

export default Component;
