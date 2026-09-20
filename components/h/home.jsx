import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/y/yc7hov.css';
import '../../css/l/lagu3m.css';
import '../../css/u/udfy8i.css';
import '../../css/z/zv7ueu.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c yc7hov"/><path class="a0m25c lagu3m"/><path class="a0m25c udfy8i"/><path class="a0m25c zv7ueu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:home"} {...others} />);
}

export default Component;
