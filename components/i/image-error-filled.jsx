import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x78rb0q8y.css';
import '../../css/n/n8fw_acsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x78rb0q8y"/><path class="n8fw_acsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:image-error-filled"} {...others} />);
}

export default Component;
