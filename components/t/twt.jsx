import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egbow5bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="egbow5bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:twt"} {...others} />);
}

export default Component;
