import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdd2oyajs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdd2oyajs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:flare-filled"} {...others} />);
}

export default Component;
