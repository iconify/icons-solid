import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2ykngb7r.css';
import '../../css/b/brphuvboc.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="w2ykngb7r"/><path class="brphuvboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:compass-alt"} {...others} />);
}

export default Component;
