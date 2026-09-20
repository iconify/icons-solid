import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs2lxvbge.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};
const content = `<path class="bs2lxvbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:computer"} {...others} />);
}

export default Component;
