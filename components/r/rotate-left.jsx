import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5d6_fnqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5d6_fnqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:rotate-left"} {...others} />);
}

export default Component;
