import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzpj5yn7p.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="nzpj5yn7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:fork-knife"} {...others} />);
}

export default Component;
