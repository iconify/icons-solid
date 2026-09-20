import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdzggabux.css';
import '../../css/y/y9rqo7u8d.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="sdzggabux"/><path class="y9rqo7u8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:text-format"} {...others} />);
}

export default Component;
