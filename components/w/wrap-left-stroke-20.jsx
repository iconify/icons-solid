import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lszk02bvz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lszk02bvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wrap-left-stroke-20"} {...others} />);
}

export default Component;
