import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dza_qqxed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dza_qqxed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:blogger-alt"} {...others} />);
}

export default Component;
