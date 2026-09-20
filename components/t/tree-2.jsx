import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eeat3sbih.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="eeat3sbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:tree-2"} {...others} />);
}

export default Component;
