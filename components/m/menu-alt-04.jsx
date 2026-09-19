import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lruz6gbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lruz6gbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:menu-alt-04"} {...others} />);
}

export default Component;
