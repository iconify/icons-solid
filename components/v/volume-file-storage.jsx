import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud8zcybxg.css';
import '../../css/s/snzv8lbca.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ud8zcybxg"/><path class="snzv8lbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:volume-file-storage"} {...others} />);
}

export default Component;
