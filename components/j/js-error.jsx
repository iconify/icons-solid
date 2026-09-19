import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzl8onbyv.css';
import '../../css/a/af2-mdbqx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fzl8onbyv"/><path class="af2-mdbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:js-error"} {...others} />);
}

export default Component;
