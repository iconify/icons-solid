import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh4k8abwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eh4k8abwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cursor-arrow-rays-solid"} {...others} />);
}

export default Component;
