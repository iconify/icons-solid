import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eic0a8bvd.css';
import '../../css/g/g1il7ubyg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eic0a8bvd"/><path class="g1il7ubyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wrap-text-20"} {...others} />);
}

export default Component;
