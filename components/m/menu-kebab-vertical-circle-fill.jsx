import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxxn7yb1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bxxn7yb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:menu-kebab-vertical-circle-fill"} {...others} />);
}

export default Component;
