import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhax6sbqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hhax6sbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cancel-circle-half-dot"} {...others} />);
}

export default Component;
