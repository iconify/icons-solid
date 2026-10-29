import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuw36nbvq.css';
import '../../css/f/fq-4mcc3f.css';
import '../../css/g/gx7tam2pd.css';
import '../../css/j/jcnnhfisw.css';
import '../../css/z/zqsxmxbqb.css';
import '../../css/f/f8yuy4b7a.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="iuw36nbvq"/><path class="fq-4mcc3f"/><path class="gx7tam2pd"/><path class="jcnnhfisw"/><path class="zqsxmxbqb"/><path class="f8yuy4b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:informatica"} {...others} />);
}

export default Component;
