import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m59kz6bes.css';
import '../../css/l/lzcr22b6g.css';
import '../../css/v/vx1h0pbuu.css';
import '../../css/b/bc3qzfb5j.css';

const viewBox = {"width":544.01,"height":488.68};
const content = `<path class="m59kz6bes"/><path class="lzcr22b6g"/><path class="vx1h0pbuu"/><path class="bc3qzfb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:twig"} {...others} />);
}

export default Component;
