import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgjp5_b_u.css';
import '../../css/g/g2uwr4b9l.css';
import '../../css/t/t8962gbnb.css';
import '../../css/y/y9p6apxyw.css';
import '../../css/b/b_u6dijaw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wgjp5_b_u"/><path class="g2uwr4b9l"/><path class="t8962gbnb"/><path class="y9p6apxyw"/><path class="b_u6dijaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-offshore-wind-20"} {...others} />);
}

export default Component;
