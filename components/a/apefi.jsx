import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkl0h0b7k.css';
import '../../css/c/c29sjqb7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkl0h0b7k"/><path class="c29sjqb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:apefi"} {...others} />);
}

export default Component;
