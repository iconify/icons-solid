import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4y5y6blb.css';
import '../../css/n/nor-6jbxu.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="v4y5y6blb"/><path class="nor-6jbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:star-fat-half-2"} {...others} />);
}

export default Component;
