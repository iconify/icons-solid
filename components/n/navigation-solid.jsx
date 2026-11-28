import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sozw1eb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sozw1eb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:navigation-solid"} {...others} />);
}

export default Component;
