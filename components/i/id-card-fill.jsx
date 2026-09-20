import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct_lf2gmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ct_lf2gmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:id-card-fill"} {...others} />);
}

export default Component;
