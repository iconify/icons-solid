import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apfcrhlku.css';
import '../../css/g/g-6i4by5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="apfcrhlku"/><rect class="g-6i4by5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shapes-alt-filled"} {...others} />);
}

export default Component;
