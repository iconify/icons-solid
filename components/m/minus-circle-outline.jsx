import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itrhu2bdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itrhu2bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:minus-circle-outline"} {...others} />);
}

export default Component;
