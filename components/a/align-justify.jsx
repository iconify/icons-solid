import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/w/w20zkn.css';
import '../../css/j/jpz_dx.css';
import '../../css/a/a7xz6k.css';
import '../../css/s/so-from-8.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c w20zkn"/><path class="a0m25c jpz_dx"/><path class="a0m25c a7xz6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:align-justify"} {...others} />);
}

export default Component;
