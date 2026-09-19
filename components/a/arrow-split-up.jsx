import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tffw4rreh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tffw4rreh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:arrow-split-up"} {...others} />);
}

export default Component;
