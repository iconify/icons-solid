import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywvh2o5os.css';
import '../../css/h/h8b9m8b5f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ywvh2o5os"/><path class="h8b9m8b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:composetoolbox"} {...others} />);
}

export default Component;
