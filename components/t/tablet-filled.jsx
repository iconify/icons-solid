import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bojbs1zxp.css';
import '../../css/t/tuobqqwah.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bojbs1zxp"/><path class="tuobqqwah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:tablet-filled"} {...others} />);
}

export default Component;
