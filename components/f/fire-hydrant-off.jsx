import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkjt2n3sd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkjt2n3sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:fire-hydrant-off"} {...others} />);
}

export default Component;
