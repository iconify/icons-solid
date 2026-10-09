import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g20323bqu.css';
import '../../css/j/jcg7b95lb.css';
import '../../css/y/y-8q6156p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g20323bqu"/><path class="jcg7b95lb"/><path class="y-8q6156p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:factory-emissions-48"} {...others} />);
}

export default Component;
