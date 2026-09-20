import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhut4zpns.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bhut4zpns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:presentation-filled"} {...others} />);
}

export default Component;
