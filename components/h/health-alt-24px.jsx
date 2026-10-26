import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfx6z8-hr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nfx6z8-hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:health-alt-24px"} {...others} />);
}

export default Component;
