import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h39unjboh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h39unjboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-path-rounded-square-solid"} {...others} />);
}

export default Component;
