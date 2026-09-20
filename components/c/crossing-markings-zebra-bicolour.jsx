import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvvi9ubbg.css';
import '../../css/c/cxyigvjaa.css';
import '../../css/d/doyh-zk4q.css';
import '../../css/j/j-pgzwjpm.css';
import '../../css/f/fplohrbjv.css';
import '../../css/z/zk2i4bb5q.css';
import '../../css/b/bi5b9bb0j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jvvi9ubbg"/><path class="cxyigvjaa"/><path class="doyh-zk4q"/><path class="j-pgzwjpm"/><path class="fplohrbjv"/><path class="zk2i4bb5q"/><path class="bi5b9bb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:crossing-markings-zebra-bicolour"} {...others} />);
}

export default Component;
