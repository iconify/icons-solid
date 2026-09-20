import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/f/fxmxr8b0v.css';
import '../../css/s/s-z1vub5z.css';
import '../../css/a/a5x6b5bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="fxmxr8b0v"/><path class="s-z1vub5z"/><path class="a5x6b5bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:shopping-basket-star"} {...others} />);
}

export default Component;
