import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjnc-d4pe.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="yjnc-d4pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:dots-2x2-20-solid"} {...others} />);
}

export default Component;
