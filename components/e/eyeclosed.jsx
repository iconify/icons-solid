import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znvs6w-8g.css';
import '../../css/d/d2zz1uo2x.css';
import '../../css/l/l5j5uofki.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="znvs6w-8g"/><path class="d2zz1uo2x"/><path class="l5j5uofki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:eyeclosed"} {...others} />);
}

export default Component;
