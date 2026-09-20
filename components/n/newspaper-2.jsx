import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d5ro20i6y.css';
import '../../css/d/dgg72ibqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="d5ro20i6y"/><path class="dgg72ibqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:newspaper-2"} {...others} />);
}

export default Component;
