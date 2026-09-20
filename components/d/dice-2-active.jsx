import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy-z_rbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gy-z_rbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:dice-2-active"} {...others} />);
}

export default Component;
