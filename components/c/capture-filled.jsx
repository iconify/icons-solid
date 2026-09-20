import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aow3f85ir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aow3f85ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:capture-filled"} {...others} />);
}

export default Component;
