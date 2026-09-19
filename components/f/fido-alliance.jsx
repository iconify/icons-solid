import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbtunjb7p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bbtunjb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:fido-alliance"} {...others} />);
}

export default Component;
