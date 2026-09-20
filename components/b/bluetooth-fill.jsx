import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnyl9fv0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnyl9fv0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bluetooth-fill"} {...others} />);
}

export default Component;
