import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b351edb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b351edb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:zoom-logo-1-solid"} {...others} />);
}

export default Component;
