import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/laorzxbjd.css';
import '../../css/f/fj21vrbos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="laorzxbjd"/><path class="fj21vrbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:contact-list-1"} {...others} />);
}

export default Component;
