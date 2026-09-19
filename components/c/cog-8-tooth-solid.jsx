import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agu67jb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="agu67jb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cog-8-tooth-solid"} {...others} />);
}

export default Component;
