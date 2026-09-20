import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceau6_uqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ceau6_uqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:edge-new-fill"} {...others} />);
}

export default Component;
