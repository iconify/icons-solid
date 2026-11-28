import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un8nmixra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="un8nmixra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-quarter-solid"} {...others} />);
}

export default Component;
