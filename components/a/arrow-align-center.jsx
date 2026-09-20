import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/h/hzcqba.css';
import '../../css/s/sbei0c.css';
import '../../css/g/gvulyl.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c hzcqba"/><path class="a0m25c sbei0c"/><path class="a0m25c gvulyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:arrow-align-center"} {...others} />);
}

export default Component;
