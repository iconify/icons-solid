import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw14v029a.css';
import '../../css/r/r3-2ecc9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nw14v029a"/><path class="r3-2ecc9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:database-alt-filled"} {...others} />);
}

export default Component;
