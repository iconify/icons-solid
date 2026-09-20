import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/errk9qbso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="errk9qbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:car-find"} {...others} />);
}

export default Component;
