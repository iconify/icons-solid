import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khlp6_3uj.css';
import '../../css/j/jr0jy1wli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="khlp6_3uj"/><circle class="jr0jy1wli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:wallet"} {...others} />);
}

export default Component;
