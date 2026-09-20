import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqqfp3yew.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cqqfp3yew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:vacuum"} {...others} />);
}

export default Component;
