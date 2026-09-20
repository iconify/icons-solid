import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyzt3kbps.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nyzt3kbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:more-muted-vert-square-fill"} {...others} />);
}

export default Component;
