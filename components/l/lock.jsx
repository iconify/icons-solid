import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5lpkiu3h.css';
import '../../css/e/euvix8w7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5lpkiu3h"/><path class="euvix8w7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:lock"} {...others} />);
}

export default Component;
