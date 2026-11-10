import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcleg0b1n.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="tcleg0b1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:folder-check-20-solid"} {...others} />);
}

export default Component;
