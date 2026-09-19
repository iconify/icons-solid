import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r93raabqp.css';
import '../../css/a/a9zfb2_0j.css';
import '../../css/e/ed247db-o.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="r93raabqp"/><path class="a9zfb2_0j"/><path class="ed247db-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:bell"} {...others} />);
}

export default Component;
