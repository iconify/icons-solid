import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zam0b_mmh.css';
import '../../css/i/i1d8z5cie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zam0b_mmh"/><path clip-rule="evenodd" class="i1d8z5cie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:sun-fill"} {...others} />);
}

export default Component;
