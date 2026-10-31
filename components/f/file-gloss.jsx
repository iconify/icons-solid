import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwuh4tb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwuh4tb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-gloss"} {...others} />);
}

export default Component;
