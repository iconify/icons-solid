import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw0com05s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aw0com05s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:align-horiz-center-simple-fill"} {...others} />);
}

export default Component;
