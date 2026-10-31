import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai5y9abrj.css';
import '../../css/t/t5wv3ubfi.css';
import '../../css/v/vlejwkz4c.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ai5y9abrj"/><path class="t5wv3ubfi"/><path class="vlejwkz4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:mongolia"} {...others} />);
}

export default Component;
