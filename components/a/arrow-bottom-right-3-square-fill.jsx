import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfg4uvbut.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gfg4uvbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-bottom-right-3-square-fill"} {...others} />);
}

export default Component;
