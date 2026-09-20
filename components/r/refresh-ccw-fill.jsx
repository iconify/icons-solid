import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg8-oacpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mg8-oacpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refresh-ccw-fill"} {...others} />);
}

export default Component;
