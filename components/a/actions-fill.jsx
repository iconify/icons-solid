import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vflu5yb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vflu5yb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:actions-fill"} {...others} />);
}

export default Component;
