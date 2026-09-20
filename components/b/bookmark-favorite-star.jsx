import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kz-uz9bcv.css';
import '../../css/b/b8wlprfnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="kz-uz9bcv"/><path class="b8wlprfnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bookmark-favorite-star"} {...others} />);
}

export default Component;
