import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r61hukbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r61hukbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:nightstand-filled"} {...others} />);
}

export default Component;
