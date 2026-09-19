import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy9noxcnw.css';
import '../../css/o/o3c_lfbti.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cy9noxcnw"/><path class="o3c_lfbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:tag-o"} {...others} />);
}

export default Component;
