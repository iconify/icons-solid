import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4uk0n1qy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4uk0n1qy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hemisphere-2-fill"} {...others} />);
}

export default Component;
