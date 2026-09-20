import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro-y-y6ov.css';
import '../../css/w/wavzocqjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ro-y-y6ov"/><path class="wavzocqjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:moonriver"} {...others} />);
}

export default Component;
