import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8_7469hg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8_7469hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:siren-alt-filled"} {...others} />);
}

export default Component;
