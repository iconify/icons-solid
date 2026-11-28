import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq_dtwb3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nq_dtwb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:incognito-solid"} {...others} />);
}

export default Component;
