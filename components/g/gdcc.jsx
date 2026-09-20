import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esgpznmzg.css';
import '../../css/q/q67cq2bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="esgpznmzg"/><path class="q67cq2bhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gdcc"} {...others} />);
}

export default Component;
